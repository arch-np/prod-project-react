import { Listbox as HdlListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { DropdownDirection } from '../../../../types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value:string;
    content:ReactNode;
    disabled?:boolean;
}

interface ListBoxProps{
    items?:ListBoxItem[];
    className?:string;
    value?:string;
    defaultValue?:string;
    onChange: <T extends string>(value:T) => void;
    readonly?:boolean;
    direction?:DropdownDirection;
    label?:string
}
export function ListBox(props:ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={'4'}>
            {label && <span>{label + '>'}</span>}
            <HdlListBox
                as={'div'}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HdlListBox.Button
                    as={'div'}
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>

                </HdlListBox.Button>
                <HdlListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map(item => (
                        <HdlListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment} // Убираем создание лишних нод
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        })}
                                >
                                    {selected && '%%%%'}
                                    {item.content}
                                </li>
                            )}
                        </HdlListBox.Option>
                    ))}
                </HdlListBox.Options>
            </HdlListBox>
        </HStack>
    );
}
