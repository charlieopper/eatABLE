import React from 'react';
import { TopNav } from './TopNav/TopNav';
import eatablelogo from '../assets/eatablelogo.png';
import styles from './LandingPage.module.css';

export function LandingPage() {
   return (
        <div>
            <TopNav/>
            <img src={eatablelogo} className={styles.eatablelogo} alt='eatable logo'/>
        </div>
   );
}