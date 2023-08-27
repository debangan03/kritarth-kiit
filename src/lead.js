import React from "react";
import { leadData } from "./leadData";
import CountdownTimer from "./component/countdown2";
const targetDate = new Date('2023-09-16T17:59:59');
const Lead = () => {
    return (
        <section className="text-white font-Mulish">
            <div className="w-full">
                <h2 className="font-bold text-center text-2xl pt-5 pb-12">EVENT LEADS</h2>
            </div>
            <div className="flex flex-col items-center">
                <img src={leadData[0].image} alt={leadData[0].name} class="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{leadData[0].name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={leadData[0].igLink}>Instagram Icon</a></li>
                    <li><a href={leadData[0].linkedInLink}>LinkedIn Icon</a></li>
                </ul>
            </div>
            <div className="flex flex-wrap">
            {leadData.slice(1, 4).map(item =>(
                <div key={item.name} className="w-full md:w-1/3 p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={item.igLink}>Instagram Icon</a></li>
                    <li><a href={item.linkedInLink}>LinkedIn Icon</a></li>
                </ul>
                </div>
            ))}
            </div>
            <div className="w-full">
                <h2 className="font-bold text-center text-2xl pt-5 pb-12">EVENT CO-LEADS</h2>
            </div>
            <div className="flex flex-wrap">
            {leadData.slice(4, 8).map(item => (
                <div key={item.name} className="w-full md:w-1/4 p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={item.igLink}>Instagram Icon</a></li>
                    <li><a href={item.linkedInLink}>LinkedIn Icon</a></li>
                </ul>
                </div>
            ))}
            </div>
            <div className="w-full">
                <h2 className="font-bold text-center text-2xl pt-5 pb-12">TEAM LEADS</h2>
            </div>
            <div className="flex flex-col items-center">
                <img src={leadData[8].image} alt={leadData[8].name} class="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{leadData[8].name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={leadData[8].igLink}>Instagram Icon</a></li>
                    <li><a href={leadData[8].linkedInLink}>LinkedIn Icon</a></li>
                </ul>
            </div>
            <div className="flex flex-wrap">
            {leadData.slice(9, 13).map(item => (
                <div key={item.name} className="w-full md:w-1/4 p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={item.igLink}>Instagram Icon</a></li>
                    <li><a href={item.linkedInLink}>LinkedIn Icon</a></li>
                </ul>
                </div>
            ))}
            </div><div className="flex flex-wrap">
            {leadData.slice(13, 17).map(item => (
                <div key={item.name} className="w-full md:w-1/4 p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={item.igLink}>Instagram Icon</a></li>
                    <li><a href={item.linkedInLink}>LinkedIn Icon</a></li>
                </ul>
                </div>
            ))}
            </div>
            <div className="w-full">
                <h2 className="font-bold text-center text-2xl pt-5 pb-12">WEB DEVELOPMENT TEAM</h2>
            </div>
            <div className="flex flex-col items-center">
                <img src={leadData[17].image} alt={leadData[17].name} class="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{leadData[17].name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={leadData[17].igLink}>Instagram Icon</a></li>
                    <li><a href={leadData[17].linkedInLink}>LinkedIn Icon</a></li>
                </ul>
            </div>
            <div className="flex flex-wrap">
            {leadData.slice(18, 22).map(item => (
                <div key={item.name} className="w-full md:w-1/4 p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="rounded-full w-48 h-48 object-cover"/>
                <h3 className="mt-4 font-bold">{item.name}</h3>
                <ul className="mt-2 flex">
                    <li className="pr-8"><a href={item.igLink}>Instagram Icon</a></li>
                    <li><a href={item.linkedInLink}>LinkedIn Icon</a></li>
                </ul>
                </div>
            ))}
            </div>
                
            <div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

      </div>
        </section>
    )
}

export default Lead;