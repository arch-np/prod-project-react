import React, { ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?:ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const {
        isMounted,
        isClosing,
        close,
    } = useModal(
        {
            animationDelay: ANIMATION_DELAY,
            onClose,
            isOpen,
        });

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    // Модальное окно монтируется в дом дерево только при фактическом вызове окна, если передан пропс lazy
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
