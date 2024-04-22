import { CSSProperties, memo, useMemo } from 'react';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = memo(
    ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
        const mods: Mods = {};
        const styles = useMemo<CSSProperties>(
            () => ({
                width: size,
                height: size,
            }),
            [size],
        );

        const errorFallback = (
            <Icon
                inverted={fallbackInverted}
                width={size}
                height={size}
                Svg={UserIcon}
            />
        );
        const fallback = <Skeleton width={size} height={size} border={'50%'} />;

        return (
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                alt={alt}
                style={styles}
                className={classNames(cls.Avatar, mods, [className])}
            />
        );
    },
);
