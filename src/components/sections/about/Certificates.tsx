'use client'
import React, {useRef} from 'react';
import {Text} from "@/components/Text";
import Link from "next/link";
import {LinkIcon} from "@/assets/SvgExporter";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
const Certificates = () => {
    const certificateRef = useRef([]);
    useGSAP(()=>{
        gsap.to(certificateRef.current,{
            scrollTrigger: {
                trigger: certificateRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: 'none',
            opacity: 1
        })
    })
    return (
        <div className={'w-full grid grid-cols-1 lg:grid-cols-2 h-screen gap-2 relative '}>
            <Text variant={'heading'} font={'secondary'} className={'absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'}>
                CERTIFICATES
            </Text>
            {certificate.map((cert,index)=>{
                return (
                    <div key={index} ref={(el)=>certificateRef.current.push(el as never)}
                         className="w-full p-4 certificate opacity-0 translate-y-1/2 backdrop-filter backdrop-blur-sm border-2 border-gray-50 rounded-lg bg-gradient-to-br from-transparent to-gray-200 bg-opacity-40 grid place-items-center">
                        <Text variant={'h3'} font={'secondary'} className={'text-center'}>
                            {cert.name}
                        </Text>
                        <Text variant={'h1'} font={'secondary'} className={'text-center font-semibold italic'}>
                            {cert.issuedBy}
                        </Text>
                        {cert.issuedBy === 'Udemy' && <Link href={cert.link} target={'_blank'}>
                            <LinkIcon className={'w-6 h-6 inline-block'}/>
                            View Certificate</Link>}

                    </div>
                )
            })}
        </div>
    );
};

export default Certificates;
export const certificate: Certificate[] = [
    {
        name: 'The Complete React Redux Node Express course',
        issuedBy:'Udemy',
        link:'https://www.udemy.com/certificate/UC-51745609-6f36-4aa1-aa20-d9f55deccf26/'
    },{
    name:'Java developer course',
    issuedBy:'JDC',
    },{
        name:'Front end developement with react js',
        issuedBy:'Udemy',
        link:'https://www.udemy.com/certificate/UC-446d7463-a5b5-4834-9f00-b8b903f3bdf9/'
    },{
    name:'Build Connect 4 clone in React js course',
    issuedBy:'Udemy',
        link:'https://www.udemy.com/certificate/UC-7ab01348-e1f8-431d-8f7d-78ab43c0c3df/'
    },{name:'React Redux and Git Mastery with Hands-on Project',
        issuedBy:'Udemy',
        link:'https://www.udemy.com/certificate/UC-35e2a42d-1cb1-419a-9aef-eded0e044e54/'

    },{name:'Configure NGINX on a Cloud Server: Digital Ocean & AWS',
        issuedBy:'Udemy',
        link:'https://www.udemy.com/certificate/UC-2921d4fc-78a2-4529-b708-75770a3d2fb8/'


    }
]
type Certificate={
    name:string,


}&(
{
    issuedBy:'Udemy',
    link:string
}|{issuedBy:'JDC'})