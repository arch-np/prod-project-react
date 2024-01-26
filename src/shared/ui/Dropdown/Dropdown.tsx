import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

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

const mapDirectionClass:Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export function Dropdown(props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map(item => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
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
                                key={String(item.content)}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={String(item.content)}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
