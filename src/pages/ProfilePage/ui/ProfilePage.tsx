import { FC } from 'react';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { id } = useParams<{id:string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
