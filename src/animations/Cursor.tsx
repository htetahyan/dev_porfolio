'use client'
import React, {useCallback, useEffect, useRef} from 'react';
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {useIsomorphicLayoutEffect} from "@/utils/useisomorphiclayouteffect";

const Cursor = () => {
    const handleMouseMove = (e: MouseEvent) => {
        const cursor = document.querySelector('.cursor');
        gsap.to(cursor, {
            x: e.clientX - 16,
            y: e.clientY - 16,
            ease: "power1",
        });
    };

    const handleMouseInteraction = (cursor: Element | null, action: string) => {
        gsap.to(cursor, {
            scale: action === 'mouseenter' ? 2.5 : 1,
            ease: "power2",
            duration: 0.3
        });
    };

    const handleMenuMouseMove = (e: MouseEvent, menu: Element | null) => {
        const rect = menu!.getBoundingClientRect();
        const s = e.pageX - rect.left;
        const o = e.pageY - rect.top;
        gsap.to(menu, {
            duration: 0.5,
            x: (s - menu!.clientWidth / 2) / menu!.clientWidth * 50,
            y: (o - menu!.clientHeight / 2) / menu!.clientHeight * 50,
            scale: 1.2,
            ease: "power2.out"
        });
    };
const handleMenuMouseLeave = (menu: Element | null) => {
    gsap.to(menu, {
        duration: 0.5,

        y: 0,
        x: 0,
        ease: "power4.out",
    });
};
    const cursorRef=useRef(null)

    useIsomorphicLayoutEffect(() => {
        const txts = Array.from(document.querySelectorAll('.text'));
        const menu = document.querySelector('.menu');
        const cursor = document.querySelector('.cursor');
        const menuContainer = document.querySelector('.menu-container');
        const mm = gsap.matchMedia();

        // Define the callback for when the media query matches
        const matchCallback = () => {
            document.addEventListener('mousemove', handleMouseMove);
            txts.forEach((txt) => {
                txt.addEventListener('mouseenter', () => handleMouseInteraction(cursor, 'mouseenter'));
                txt.addEventListener('mouseleave', () => handleMouseInteraction(cursor, 'mouseleave'));
            });
            menu?.addEventListener('mouseenter', () => handleMouseInteraction(cursor, 'mouseenter'));
            menu?.addEventListener('mouseleave', () => handleMouseInteraction(cursor, 'mouseleave'));
            menuContainer?.addEventListener('mousemove', (e) => handleMenuMouseMove(e as MouseEvent, menu));
            menuContainer?.addEventListener('mouseleave', () => handleMenuMouseLeave(menu));
            gsap.ticker.lagSmoothing(1000, 10);
            gsap.ticker.fps(60);
        };

        // Add the media query listener
        mm.add("(min-width: 1024px)", matchCallback);

        // Return a cleanup function to remove the media query listener and event listeners
        return () => {
            mm.kill(); // Remove all media query listeners
            document.removeEventListener('mousemove', handleMouseMove);
            txts.forEach((txt) => {
                txt.removeEventListener('mouseenter', () => handleMouseInteraction(cursor, 'mouseenter'));
                txt.removeEventListener('mouseleave', () => handleMouseInteraction(cursor, 'mouseleave'));
            });
            menu?.removeEventListener('mouseenter', () => handleMouseInteraction(cursor, 'mouseenter'));
            menu?.removeEventListener('mouseleave', () => handleMouseInteraction(cursor, 'mouseleave'));
            menuContainer?.removeEventListener('mousemove', (e) => handleMenuMouseMove(e as MouseEvent, menu));
            menuContainer?.removeEventListener('mouseleave', () => handleMenuMouseLeave(menu));
        };
    }, [handleMouseMove, handleMouseInteraction]);

    return (
        <div ref={cursorRef} className={'cursor'}></div>
    );
};

export default Cursor;
