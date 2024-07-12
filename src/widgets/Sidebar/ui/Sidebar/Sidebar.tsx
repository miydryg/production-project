import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeToggle } from 'widgets/ThemeToggle';
import { LangSwitcher } from
    'widgets/LangSwitcher/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
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
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={toggleSidebar}>{t('Відкрити сайдбар')}</Button>
            <div className={cls.switchers}>
                <ThemeToggle />
                <div className={cls.lang}>
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};
