import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title={'Заголовок'}
                feedbackTitle={'Оставьте свой отзыв'}
                hasFeedback
            />
        </Page>
    );
});

export default MainPage;
