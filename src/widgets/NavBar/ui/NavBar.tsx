import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { RoutesPath } from '@/shared/const/router';

interface NavbarProps{
    className?: string;
}

export const NavBar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Prod Project')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutesPath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
            </header>);
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
});

