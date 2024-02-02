import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
interface PopoverProps {
    className?: string;
    trigger:ReactNode;
    direction?:DropdownDirection;
    children:ReactNode;
}

export function Popover(props:PopoverProps) {
    const {
        children,
        className,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}