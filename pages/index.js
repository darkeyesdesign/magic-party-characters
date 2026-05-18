import link from 'next/link'

import Head from 'next/head'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import HeaderPart from './components/_header-part'

/*MY COMPONENTS*/
import Navigation from './components/_navigation'
import SocialIcons from './components/_social-icons'

{/*const inter = Inter({ subsets: ['latin'] })
const advent = Advent_Pro({ subsets: ['latin'] })*/}
const lexend = Lexend({ subsets: ['latin-ext'] });

export default function Home() {
  return (
 <>
{/* HEAD METADATA */}
	<HeaderPart />

{/* SET UP Styles AND Font */}
  <main className={`${styles.main} ${lexend.className}`}>
{/*    <main className={`${styles.main} ${inter.className}`}>*/}

{/*	PAGE TITLE */}
		<div className={styles.title}>
			<h1>Magic Party Characters</h1>
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
  )
}
