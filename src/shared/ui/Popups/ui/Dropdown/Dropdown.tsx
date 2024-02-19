import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Dropdown.module.scss';

export interface DropDownItem{
    disabled?:boolean;
    content?:ReactNode;
    onClick?:()=>void;
    href?:string;
}
interface DropdownProps{
    className?:string
    items:DropDownItem[];
    trigger:ReactNode;
    direction?:DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                refName='href'
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={'dr_key' + index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={'dr_key' + index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
