'use client'
import React from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

export default ThemeProvider;
