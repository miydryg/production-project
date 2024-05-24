import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Переклад')}
        </Button>
    );
};
