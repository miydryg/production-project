import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import { Route } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >

            <Button
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"

                onClick={toggleSidebar}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}

            </Button>


    
            <div className={cls.items}>
                <div>
                    <AppLink
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('Головна')}</span>
                    </AppLink>
                </div>

                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('Про сайт')}</span>
                    </AppLink>
                </div>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <div className={cls.lang}>
                    <LangSwitcher short={collapsed} />
                </div>
            </div>
        </div>
    );
};
