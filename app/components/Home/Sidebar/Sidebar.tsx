import React from 'react';
import styles from './sidebar.module.css';
import SideBarItem from './SidebarItem/SideBarItem';

const radioStations = [
  { id: 1, name: 'Fluffy' }, // Added unique IDs
  { id: 2, name: 'Fluffy' },
  { id: 3, name: 'Fluffy' },
  { id: 4, name: 'Fluffy' },
  { id: 5, name: 'Fluffy' },
  { id: 6, name: 'Fluffy' },
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
