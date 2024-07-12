import { BugButton } from 'app/provider/ErrorBondary/ui/BugButton';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Головна')}
            <BugButton />
        </div>
    );
};
export default MainPage;
