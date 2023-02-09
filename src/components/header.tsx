import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './header.css';

type Page = {
    route: string,
    text: string,
};

export function Header() {
    const [currentRoute, setCurrentRoute] = useState<string>('/');

    const pages = [
        { route: '/', text: 'Home' },
        { route: '/slippi-replays', text: 'Slippi' },
    ];

    function renderLink({ route, text }: Page) {
        const isActive = route === currentRoute;

        return (
            <Link 
                key={`route-${route}`} 
                className={isActive ?'disabled' : ''} 
                onClick={() => setCurrentRoute(route)} 
                to="/"
            >
                {text}
            </Link>
        )
    }

    console.log({currentRoute});

    return (
        <div>
            { pages.map(renderLink) }
        </div>
    );
}