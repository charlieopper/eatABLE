import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <div class="field has-addons">
                <p className="control">
                    <button className="button is-static is-medium">Search</button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Burritos, Ice Cream, Sandwiches"/>
                </p>
                <p className="control">
                    <button className="button is-static is-medium">Nearby</button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="City Name"/>
                </p>
            </div>
        </div>
    );
}