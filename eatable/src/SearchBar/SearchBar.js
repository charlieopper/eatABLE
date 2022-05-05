import React from 'react';

export function SearchBar() {
    return (
        <div>
            <div class="field has-addons">
                <p class="control">
                    <input class="input" type="text" placeholder="Your email"/>
                </p>
                <p class="control">
                    <a class="button is-static">@gmail.com</a>
                </p>
            </div>
        </div>
    );
}