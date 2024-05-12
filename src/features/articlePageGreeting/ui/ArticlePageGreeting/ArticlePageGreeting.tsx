import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { isMobile } from 'react-device-detect';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу со статьями')}
            text={t('Здесь находятся статьи на различные темы')}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
