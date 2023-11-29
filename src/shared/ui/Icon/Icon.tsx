import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './Icon.module.scss';

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
};

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, inverted, ...restProps
    } = props;

    return (
        <Svg
            className={classNames(
                cls.Icon,
                {
                    [cls.inverted]: inverted,
                },
                [className],
            )}
            {...restProps}
        />
    );
});
