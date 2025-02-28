import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTheme } from 'app/provider/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;
    // eslint-disable-next-line no-unused-vars
    const { themes } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    // const [isOpened, setIsOpened] = useState(false);

    const onClickContent = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    const onCloseModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onCloseModal();
            }
        },
        [onCloseModal],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, handleKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onKeyDown={onCloseModal}
                    onClick={onCloseModal}
                    role="button"
                    tabIndex={0}
                >
                    <div
                        className={cls.content}
                        onClick={onClickContent}
                        role="button"
                        tabIndex={0}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
