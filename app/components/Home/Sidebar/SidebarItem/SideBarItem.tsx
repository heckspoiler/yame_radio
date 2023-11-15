import React from 'react';
import styles from './sidebarItem.module.css';

interface SidebarItemProps {
  name: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name }) => {
  return <button className={styles.sidebarItem}>{name}</button>;
};

export default SidebarItem;
