import React from 'react';
import { DayOne } from './components/day1';
import styles from './styles.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Advent_of_code 2023</h1>

      <DayOne />
    </div>
  );
}

export default App;
