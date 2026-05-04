import styles from '@/styles/Home.module.css'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'

import HeaderPart from './components/_header-part'

import Navigation from './components/_navigation'
import SocialIcons from './components/_social-icons'

const lexend = Lexend({ subsets: ['latin-ext'] });

export default function FilmsPage() {
	return (
		<>
			<HeaderPart />

			{/* SET UP Styles AND Font */}
  		<main className={`${styles.main} ${lexend.className}`}>

			{/*	PAGE TITLE */}
				<div className={styles.title}>
          Text here
				</div>
				<hr />

			{/* NAVIGATION */}
				<div className={styles.navigation}>
		  		<Navigation />
				</div>

			{/* SOCIALS */}
				<div className={styles.socials_container}>
					<SocialIcons />
				</div>

			{/* FOOTER LINKS */}
				<div className={styles.navigation}>
					<Navigation />
				</div>

			</main>
		</>
	);
}
