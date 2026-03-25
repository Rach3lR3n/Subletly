import * as React from 'react'
import { Link } from '@tanstack/react-router'
import Profile from '../Profile/Profile'
import styles from './Header.module.css'

function Header() {
    return (
        <React.Fragment>
            <div className={styles.nav}>
                <div className={styles.logo}>Sublet<div className={styles.hi}>ly</div></div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/" className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/posts" className={styles.link}>Posts</Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.link}>About</Link>
                    </li>
                </ul>
                <Profile name="Name"></Profile>
            </div>
        </React.Fragment>
    )
}

export default Header;