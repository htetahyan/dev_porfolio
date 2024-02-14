import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { gsap } from "gsap";

const createTimeline = (elementId: string, initialXPercent: number, finalXPercent: number, height: string) => {
    const tl = gsap.timeline();
    tl.set(`#${elementId}`, {
        xPercent: initialXPercent,
        height: height,
    });
    tl.to(`#${elementId}`, {
        xPercent: finalXPercent,
        duration: 0.5,
        stagger: 0.1,
    });
    return tl;
};

export const animatePageIn = () => {
    const tl1 = createTimeline("transition-element-1", 200, -100, "10vh");


    const tl2 = createTimeline("transition-element-2", 0, 100, "10vh");

    tl2.add(tl1, "<");
};

export const animatePageOut = ({href, router}: {href: string, router: AppRouterInstance}) => {


    const tl1 = createTimeline("transition-element-1", -100, 0, "10vh");
    tl1.eventCallback("onStart", () => {
        router.prefetch(href);
    })
    const tl2 = createTimeline("transition-element-2", 100, 0, "10vh");
    tl1.eventCallback("onComplete", () => {
        router.push(href);

    });
    tl1.add(tl2, "<");
};
