import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import React, { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?:boolean
}
// Обертка над svg, для задания цвета
export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />

    );
});
