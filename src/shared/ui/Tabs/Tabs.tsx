import { ReactNode, useCallback } from 'react';

import { Card, CardTheme } from '../Card/Card';

import { typedMemo } from '@/shared/const/typedMemo';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string>{
    value: T;
    content: ReactNode
}
interface TabsProps<T extends string> {
    className?: string;
    tabs:TabItem<T>[];
    value: T;
    onTabChange: (tab: T) => void;
}
export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabChange,
    } = props;

    const clickHandle = useCallback((value:T) => () => {
        onTabChange(value as T);
    }, [onTabChange]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab.value)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
