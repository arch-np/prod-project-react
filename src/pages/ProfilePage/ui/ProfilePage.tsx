import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap='16'>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
});

export default ProfilePage;
