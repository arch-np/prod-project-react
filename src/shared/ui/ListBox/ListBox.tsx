import { Fragment, ReactNode } from 'react';
import { Listbox as HdlListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '/shared/ui/Stack';

export interface ListBoxItem {
    value:string;
    content:ReactNode;
    disabled?:boolean;
}

type DropdownDirection = 'bottom' | 'top';
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

const mapDirectionClass:Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props:ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={'4'}>
            {label && <span>{label + '>'}</span>}
            <HdlListBox
                as={'div'}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HdlListBox.Button
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
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
