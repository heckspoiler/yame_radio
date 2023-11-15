import React from 'react';
import styles from './sidebar.module.css';
import SideBarItem from './SidebarItem/SideBarItem';

const radioStations = [
  { id: 1, name: 'Fluffy' },
  { id: 2, name: 'Quick' },
  { id: 3, name: 'Core' },
  { id: 4, name: 'Stone' },
  { id: 5, name: 'Cloud' },
  { id: 6, name: 'Pasta' },
];

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <aside className={styles.sidebar}>
        {radioStations.map((station) => (
          <SideBarItem key={station.id} name={station.name} />
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
