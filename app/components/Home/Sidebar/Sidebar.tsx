'use client';

import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import SideBarItem from './SidebarItem/SideBarItem';
import axios from 'axios';

const radioStations = [
  { id: 1, name: 'Fluffy' },
  { id: 2, name: 'Quick' },
  { id: 3, name: 'Core' },
  { id: 4, name: 'Stone' },
  { id: 5, name: 'Cloud' },
  { id: 6, name: 'Pasta' },
];

const Sidebar: React.FC = () => {
  const [currentStation, setCurrentStation] = useState(radioStations[0]);
  const [stationData, setStationData] = useState(null);

  const fetchStationData = async (stationName: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/songs`);
      setStationData(response.data);
      console.log(`Data for ${stationName}:`, response.data);
    } catch (error) {
      console.error(`Error fetching data for ${stationName}:`, error);
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <aside className={styles.sidebar}>
        {radioStations.map((station) => (
          <SideBarItem
            key={station.id}
            name={station.name}
            onClick={() => fetchStationData(station.name)}
          />
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
