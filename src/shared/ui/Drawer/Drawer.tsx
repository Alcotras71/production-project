import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { classNames, Mods } from '../../lib/helpers/classNames/classNames';
import cls from './Drawer.module.scss';

export type DrawerProps = {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, onClose, isOpen, children,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
