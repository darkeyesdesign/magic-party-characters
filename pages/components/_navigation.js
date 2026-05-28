import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Navigation() {
	return (
		<>
			<div className={styles.navigation_items}>
				<ul>
	  			<li>
						<a href="/">HOME</a>
						</li>
          <li>
	  				<a href="/_contact-page">CONTACT</a>
						</li>
{/*					<li>					
						<a href="/_about-page">ABOUT</a>
						</li>
*/}
				</ul>
			</div>
		</>
	);
}
