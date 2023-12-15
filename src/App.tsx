import React, { useState } from 'react';
import { DayOne } from './execises/day1';
import { DayTwo } from './execises/day2';
import { DayThree } from './execises/day3';
import { DayFour } from './execises/day4';
import { DayFive } from './execises/day5';
import { DaySix } from './execises/day6';
import { DaySeven } from './execises/day7';
import { Menu } from './components/menu';
import './styles.css';
import styles from './styles.module.css';

const Content:React.FC<{ activeItem: string }> = ({ activeItem }) => {
	switch (activeItem) {
		case 'day 1':
			return <DayOne />

		case 'day 2':
			return <DayTwo />

		case 'day 3':
			return <DayThree />

		case 'day 4':
			return <DayFour />
		
		case 'day 5':
			return <DayFive />

		case 'day 6':
			return <DaySix />		

		case 'day 7':
			return <DaySeven />
	
		default:
			return null;
	}
}

const App: React.FC = () => {
	const [activeItem, setActiveItem] = useState('day 7');

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<div className={styles['header-inner']}>
					<span className={styles.logo}>
						Advent of Code [2023]
					</span>

					<div className={styles.stars}>
						14*
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<Menu data={['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7']} activeItem={activeItem} onChange={setActiveItem}/>

				<div className={styles.content}>
					<Content activeItem={activeItem} />
				</div>
			</main>

		</div>
	);
}

export default App;
