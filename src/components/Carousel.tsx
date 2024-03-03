import React, {useRef, useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import { LinkIcon, Next} from "@/assets/SvgExporter";
import {Text} from "@/components/Text";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
type CarouselProps = {
    images: ({     type: string;     src: StaticImageData;    } | {     type: string;  contributions:string[],   href?: string; linkText: string;   })[]
};

const Carousel = ({ images }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs=useRef([])
 const carouselRef=useRef(null)
const {contextSafe}=useGSAP(()=> {
    const carouselElements = imageRefs.current;
    carouselElements.forEach((element, index) => {
        gsap.to(element, {
            autoAlpha: index === activeIndex ?  1 :  0,
scale: index === activeIndex ?  1 :  0.7,
            opacity: index === activeIndex ?  1 :  0,

duration:0.1,
            ease: 'power4.inOut',

        });
    });

// Animate the active carousel element to be fully visible
 return () => {
    carouselElements.forEach((e)=> gsap.killTweensOf(e)) ;

 }

},{scope:carouselRef,dependencies:[activeIndex]})

    const nextSlide =  contextSafe(() => {
        setActiveIndex((prevIndex) => (prevIndex +  1) % images.length);
    });




    return (
        <div ref={carouselRef} className="relative lg:flex items-center h-full w-full justify-between">

            <div className="min-h-[40vh] lg:min-h-[80vh] h-full w-full  relative">
                {images.map((image, index) => (
                    <> {'src' in image ? (
                        <Image fetchPriority={'low'}
                               loading={'lazy'}
                               placeholder={'blur'}
                               blurDataURL={blurDataUrl}

                            key={index}
                            ref={(ref)=>imageRefs.current[index]=ref as never}
                            src={image.src}
                            alt=""

                            className={`absolute carousel-element md:object-cover object-contain lg:object-contain w-full h-full transition-opacity duration-500  `}
                        />
                        ) : (
                        <div
                            key={index}
                            ref={(ref) => imageRefs.current[index] = ref as never}
                            className={`grid   carousel-element items-center  w-full h-full transition-opacity duration-500  `}
                        >
                          <div className={'flex flex-col items-start px-2'}> <Text variant={'subHeading'}>CONTRIBUTIONS</Text>{image.contributions.map((contribution, index) => (
                                <Text key={index} className={'text-xl  md:text-3xl m-2'}>-{contribution}</Text>))}
                          </div>
                            <div className={'flex justify-center items-center mx-auto'}><LinkIcon className={'w-8 h-8'}/>
                                {image.href ?    <Link className={'text-3xl'} href={image.href} target={'_blank'}>
                                    {image.linkText}
                                </Link>: <Text className={'text-3xl '}>{image.linkText}</Text>}
                            </div>
                        </div>)
                    }
                         </>    ))}

            </div>

            <Next onClick={nextSlide}
                className={'z-10 hover:scale-125 cursor-pointer transition-transform' +
                    ' bg-white text p-2 h-16 w-16 rounded-full shadow-md  mx-auto  right-0 lg:max-w-16 '}/>

        </div>
    );
};

export default Carousel;
export const blurDataUrl='data:image/jpeg;base64,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'