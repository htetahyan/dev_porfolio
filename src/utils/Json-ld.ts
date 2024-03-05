import {Person, WithContext} from "schema-dts";

export const JsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
        name: "Htet Ah Yan",
    jobTitle: "Software Engineer",
        telephone:
    "(+95) 9 650 842 555",
    email:    "htetahyan@gmail.com",
   url: "https://htetahyan.vercel.app",
     image: "https://htetahyan.vercel.app/htetahyan.jpg",
    gender: "Male",
    height: "179cm",
    birthDate: "2003-7-15",
    nationality: "Myanmar",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressRegion: "Bangkok",
        postalCode: "10110",
        streetAddress: " 8 Sukhumvit 51 Alley"
    },
knowsLanguage: "English",
    netWorth: {
        "@type": "MonetaryAmount",
        currency: "USD",
         minValue: 10000,
        maxValue: 800000
    }

}
