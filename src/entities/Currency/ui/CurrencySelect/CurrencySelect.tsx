import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const currencyOptions = useMemo(
            () =>
                Object.entries(Currency).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            [],
        );

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                readonly={readonly}
                value={value}
                defaultValue={t('Укажите валюту')}
                label={t('Укажите валюту')}
                items={currencyOptions}
                onChange={onChangeHandler}
                direction={'top right'}
            />
        );
    },
);
