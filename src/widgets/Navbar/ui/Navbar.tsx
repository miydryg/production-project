import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const isOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div>
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        theme={ThemeButton.CLEAR_INVERTED}
                        type="button"
                        onClick={isOpenModal}
                    // eslint-disable-next-line i18next/no-literal-string
                    >
                        {t('Увійти')}
                    </Button>
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                </div>
            </div>
        </div>
    );
};
