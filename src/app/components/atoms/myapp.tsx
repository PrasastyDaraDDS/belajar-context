'use client';
import React, { useState } from "react";
import Navbar from "./navbar"; // Sesuaikan impor Navbar
import { themeContext } from "@/app/utilities/context/mycontext"; // Pastikan impor themeContext dilakukan dengan benar
import { themes } from "@/app/utilities/context/themes/mythemes"; // Pastikan impor themes dilakukan dengan benar

export default function Myapp({ Component, pageProps }: { Component: any, pageProps: any }) { // Tambahkan koma antara Component dan pageProps
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                }}>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </themeContext.Provider>
    );
}
