import css from './Layout.module.css';
// import { useSelector } from 'react-redux';

export const Layout = ({ children }) => {
  // const value = useSelector(state => state.some.value);
  return <main className={css.container}>{children}</main>;
};
