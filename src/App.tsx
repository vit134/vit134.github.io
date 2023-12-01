import React from 'react';
import { DayOne, text } from './components/day1';
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
			</div>
		</header>

		<main className={styles.main}>
			<div className={styles['col_left']}>
				<DayOne />
			</div>
			<div className={styles['col_right']}>
				<CodeBlock
					customStyle={{background: '#0f0f23'}}
					codeContainerStyle={{
						background: '#0f0f23',
						border: `1px solid var(--greenColor)`,
						padding: '4px 12px',
					}}
					language='ts'
					text={text}
					showLineNumbers={false}
					theme={dracula}
				/>
			</div>
		</main>

	</div>
  );
}

export default App;
