'use client';

import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import SideBarItem from './SidebarItem/SideBarItem';
import axios from 'axios';
import musicPlayerStore from '@/app/store/musicPlayerStore';

interface RadioStation {
  id: number;
  name: string;
  endpoint: string;
  afterContent: string;
}

const radioStations: RadioStation[] = [
  {
    id: 1,
    name: 'Fluffy',
    endpoint: 'fluffy',
    afterContent: 'Fluffy gives you smooth tunes to start your day right.',
  },
  {
    id: 2,
    name: 'Quick',
    endpoint: 'quick',
    afterContent:
      'Need for speed? Choose this station if you need that energy rush',
  },
  {
    id: 3,
    name: 'Core',
    endpoint: 'core',
    afterContent:
      'Fluffy Radio gives you smooth tunes to start your day the right way.',
  },
  {
    id: 4,
    name: 'Stone',
    endpoint: 'stone',
    afterContent:
      'A stone is cool and hard - enjoy our selection of Trap Songs',
  },
  {
    id: 5,
    name: 'Cloud',
    endpoint: 'cloud',
    afterContent:
      'Fluffy Radio gives you smooth tunes to start your day the right way.',
  },
  {
    id: 6,
    name: 'Pasta',
    endpoint: 'pasta',
    afterContent:
      'Fluffy Radio gives you smooth tunes to start your day the right way.',
  },
];

const Sidebar: React.FC = () => {
  const [currentStation, setCurrentStation] = useState<RadioStation>(
    radioStations[0]
  );
  const [stationData, setStationData] = useState(null);

  const fetchStationData = async (station: RadioStation) => {
    setCurrentStation(station);
    // setting Zustand state for radio station
    musicPlayerStore.getState().setRadioStation(station.name);
    try {
      const response = await axios.get(`http://localhost:4000/api/songs/`);
      setStationData(response.data);
      console.log(response.data[0].song.length);
      //updating Zustand state
      musicPlayerStore.getState().setSongTitle(response.data[0].song.title);
      musicPlayerStore.getState().setArtist(response.data[0].song.artist);
      musicPlayerStore.getState().setDuration(response.data[0].song.length);
    } catch (error) {
      console.error(`Error fetching data for ${station.name}:`, error);
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <aside className={styles.sidebar}>
        {radioStations.map((station) => (
          <SideBarItem
            key={station.id}
            name={station.name}
            data-endpoint={station.endpoint}
            onClick={() => fetchStationData(station)}
            afterContent={station.afterContent}
          />
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
