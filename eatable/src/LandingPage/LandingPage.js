import React from 'react';
import { TopNav } from './TopNav/TopNav';
import eatablelogo from '../assets/eatablelogo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function LandingPage() {
   return (
        <div>
            <TopNav/>
            <img src={eatablelogo} className={styles.eatablelogo} alt='eatable logo'/>
            <SearchBar/>
        </div>
   );
}