import { ChangeEvent, useMemo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOptions<T> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string, >(props: SelectProps<T>) => {
    const {
        className, label, options, value, readonly, onChange,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        )),
        [options],
    );

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
