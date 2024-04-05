import { useContext } from "react";
import Link from 'next/link';
import { themeContext } from "@/app/utilities/context/mycontext";
import { themes } from "@/app/utilities/context/themes/mythemes";

export default function Navbar() {
    const { toggleTheme, theme } = useContext(themeContext);
    const newThemeName = theme === themes.dark ? 'light' : 'dark';
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
            }}>
            <div>My Website</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/profile">Profile</Link>
                <button onClick={toggleTheme}>Set {newThemeName} theme</button>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';

// Komponen toggle button tema
function ThemeToggleButton({ toggleTheme }) {
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}

