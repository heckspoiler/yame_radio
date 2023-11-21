import React from 'react';
import styles from './sidebarItem.module.css';

interface SidebarItemProps {
  name: string;
  onClick: () => void;
  afterContent: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  onClick,
  afterContent,
}) => {
  return (
    <button
      className={styles.sidebarItem}
      onClick={onClick}
      data-after-content={afterContent}
    >
      {name}
    </button>
  );
};

export default SidebarItem;
