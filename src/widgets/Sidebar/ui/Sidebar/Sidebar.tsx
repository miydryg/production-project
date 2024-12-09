import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
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
            <Button data-testid="sidebar-toggle" onClick={toggleSidebar}>
                {t('Відкрити сайдбар')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <div className={cls.lang}>
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
