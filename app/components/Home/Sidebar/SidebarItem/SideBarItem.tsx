import React from 'react';
import styles from './sidebarItem.module.css';

interface SidebarItemProps {
  name: string;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, onClick }) => {
  return (
    <button className={styles.sidebarItem} onClick={onClick}>
      {name}
    </button>
  );
};

export default SidebarItem;
