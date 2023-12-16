import React, { useState } from 'react';
import { Menu } from './components/menu';
import Exercises from './execises';
import './styles.css';
import styles from './styles.module.css';

const Content:React.FC<{ activeItem: number }> = ({ activeItem }) => {
	return Exercises[activeItem - 1] || null;
}

const App: React.FC = () => {
	const [activeItem, setActiveItem] = useState(9);

	const menuItems = Exercises.map((el, ind) => ind + 1);

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<div className={styles['header-inner']}>
					<span className={styles.logo}>
						Advent of Code [2023]
					</span>

					<div className={styles.stars}>
						18*
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<Menu data={menuItems} activeItem={activeItem} onChange={setActiveItem}/>

				<div className={styles.content}>
					<Content activeItem={activeItem} />
				</div>
			</main>

		</div>
	);
}

export default App;
