import React from 'react';
import styles from './layout.css';

const { layout } = styles;

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return <div className={layout}>{children}</div>;
}

Layout.defaultProps = {
  children: null,
};
