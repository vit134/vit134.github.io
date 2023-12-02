import React from 'react';
import { DayOne, partOneText, partTwoText } from './components/execises/day1';
import { CodeBlock, dracula } from 'react-code-blocks';
import './styles.css';
import styles from './styles.module.css';

const App: React.FC = () => {
  return (
	<div className={styles.root}>
		<header className={styles.header}>
			<div className={styles['header-inner']}>
				<span className={styles.logo}>
					Advent of Code [2023]
				</span>

				<div className={styles.stars}>
					⭐️⭐️
				</div>
			</div>
		</header>

		<main className={styles.main}>
			<div className={styles['col_left']}>
				<DayOne />
			</div>
			<div className={styles['col_right']}>
				<div>--- Part 1 ---</div>
				<CodeBlock
					customStyle={{background: '#0f0f23'}}
					codeContainerStyle={{
						background: '#0f0f23',
						border: `1px solid var(--greenColor)`,
						padding: '4px 12px',
						width: '100%'
					}}
					language='ts'
					text={partOneText}
					showLineNumbers={false}
					theme={dracula}
				/>
				<div>--- Part 2 ---</div>
				<CodeBlock
					customStyle={{background: '#0f0f23'}}
					codeContainerStyle={{
						background: '#0f0f23',
						border: `1px solid var(--greenColor)`,
						padding: '4px 12px',
						width: '100%'
					}}
					language='ts'
					text={partTwoText}
					showLineNumbers={false}
					theme={dracula}
				/>
			</div>
		</main>

	</div>
  );
}

export default App;
