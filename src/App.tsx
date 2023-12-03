import React, { useState } from 'react';
import { DayOne } from './execises/day1';
import { DayTwo } from './execises/day2';
import { DayThree } from './execises/day3';
import './styles.css';
import styles from './styles.module.css';
import { Menu } from './components/menu';

const Content:React.FC<{ activeItem: string }> = ({ activeItem }) => {
	switch (activeItem) {
		case 'day 1':
			return <DayOne />

		case 'day 2':
			return <DayTwo />

		case 'day 3':
			return <DayThree />
	
		default:
			return null;
	}
}

const App: React.FC = () => {
	const [activeItem, setActiveItem] = useState('day 3');

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<div className={styles['header-inner']}>
					<span className={styles.logo}>
						Advent of Code [2023]
					</span>

					<div className={styles.stars}>
						⭐️⭐️⭐️⭐️
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<Menu data={['day 1', 'day 2', 'day 3']} activeItem={activeItem} onChange={setActiveItem}/>

				<div className={styles.content}>
					<Content activeItem={activeItem} />
				</div>
			</main>

		</div>
	);
}

export default App;
