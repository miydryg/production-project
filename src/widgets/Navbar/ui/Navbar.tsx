import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to="/"
                        className={cls.mainLink}
                    >
                        {t('Головна')}
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                        {t('Про сайт')}
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
