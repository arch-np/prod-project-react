import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface CountrySelectProps {
    className?: string;
    value?:Country;
    onChange?:(value:Country)=>void;
    readonly?: boolean;
}

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const countryOptions = useMemo(() =>
        Object.entries(Country).map(val => ({ value: val[0], content: val[1] }))
    , []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            readonly={readonly}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={countryOptions}
            onChange={onChangeHandler}
            direction={'top right'}
        />
    );
});
