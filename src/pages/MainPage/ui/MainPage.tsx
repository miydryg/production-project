import { BugButton } from 'app/provider/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = React.useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Головна')}
            <Counter />
            <BugButton />
            <Input placeholder={t('write something')} value={value} onChange={onChange} />
        </div>
    );
};
export default MainPage;
