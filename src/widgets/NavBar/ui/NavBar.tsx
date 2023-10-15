import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps{
    className?: string;
}

export const NavBar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur, dolorem, eos harum illo incidunt laborum minima, nesciunt non optio perferendis provident quasi velit? Ab distinctio fugit in provident sint.
            </Modal>
        </div>
    );
};

