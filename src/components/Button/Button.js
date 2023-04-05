import clsx from 'clsx';
import css from './Button.module.css';
// import { useSelector } from 'react-redux';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  // const value = useSelector(state => state.some.value);
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
