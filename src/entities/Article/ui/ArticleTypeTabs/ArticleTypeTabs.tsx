import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../model/consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value:ArticleType;
    onChangeType:(type:ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.POLITICS,
            content: t('Политика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.WEATHER,
            content: t('Погода'),
        },
    ], [t]);

    // const onTabClick = useCallback((tab:TabItem) => {
    //     onChangeType(tab.value as ArticleType);
    // }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabChange={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
});
