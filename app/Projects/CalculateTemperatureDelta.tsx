"use client";

import { useState } from "react"

export default function CalculateTemperatureDelta() {
    const [Q, setQ] = useState(0)
    const [Cw, setCw] = useState(0)
    const [m, setM] = useState(0)

    const [result, setResult] = useState<number | null>(null);

    function calculateDeltaT() {
        const numQ = Number(Q);
        const numCw = Number(Cw);
        const numM = Number(m);

        if (numCw > 0 && numM > 0) {
            const deltaT = numQ / (numCw * numM);
            setResult(deltaT);
        } 
        else {
            setResult(null);
        }
    }

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="space-y-4">

                {/*====================
                            Q
                ====================*/}
                <div className="flex flex-col gap-1.5">
                    {/*Label*/}
                    <label 
                        className="text-lg font-medium text-gray-700">
                        Podaj dostarczone ciepło (Q): 
                    </label>

                    <div className="relative">
                        {/*Input*/}
                        <input 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500 focus:text-gray-800 transition-colors"
                            type='number'
                            step="any"
                            value={Q}
                            onChange={(event) => event.target.value === "" ? "" : setQ(parseFloat(event.target.value))}
                        />

                        {/*Jednostka*/}
                        <span className="absolute right-3 top-2.5 text-sm text-gray-600">
                            J
                        </span>

                    </div>
                </div>
                
                {/*====================
                           Cw
                ====================*/}
                <div className="flex flex-col gap-1.5">
                    {/*Label*/}
                    <label 
                        className="text-lg font-medium text-gray-700">
                        Podaj ciepło właściwe (Cw): 
                    </label>

                    <div className="relative">
                        {/*Input*/}
                        <input 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500 focus:text-gray-800 transition-colors"
                            type='number'
                            step="any"
                            value={Cw}
                            onChange={(event) => event.target.value === "" ? "" : setCw(parseFloat(event.target.value))}
                        />

                        {/*Jednostka*/}
                        <span className="absolute right-3 top-2.5 text-sm text-gray-600">
                            J/(kg·°C)
                        </span>

                    </div>
                </div>

                {/*====================
                           m
                ====================*/}
                <div className="flex flex-col gap-1.5">
                    {/*Label*/}
                    <label 
                        className="text-lg font-medium text-gray-700">
                        Podaj masę (m): 
                    </label>

                    <div className="relative">
                        {/*Input*/}
                        <input 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500 focus:text-gray-800 transition-colors"
                            type='number'
                            step="any"
                            value={m}
                            onChange={(event) => event.target.value === "" ? "" : setM(parseFloat(event.target.value))}
                        />

                        {/*Jednostka*/}
                        <span className="absolute right-3 top-2.5 text-sm text-gray-600">
                            kg
                        </span>

                    </div>
                </div>

                {/*====================
                        Przycisk
                ====================*/}
                <button
                    onClick={calculateDeltaT}
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow transition-colors duration-200 cursor-pointer"
                    >
                    Oblicz ΔT
                </button>

                {result !== null && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Wynik (ΔT)
                        </span>
                        <span className="text-2xl font-extrabold text-blue-900 mt-1">
                            {/*Zaokrąglanie do 2 miejsc po przecinku*/}
                            {result.toFixed(2)}K
                        </span>
                    </div>
                )}

            </div>
        </div>

        // <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        //     <div className="flex-col">
        //         <label>Podaj Q: </label>
        //         <input className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        //                 type='number'
        //                 step="any"
        //                 value={Q}
        //                 onChange={(event) => setQ(parseFloat(event.target.value))}
        //         />
        //     </div>

        //     <div className="flex-col">
        //         <label>Podaj Cw: </label>
        //         <input className="border rounded-lg p-1"
        //                 type='number'
        //                 step="any"
        //                 value={Cw}
        //                 onChange={(event) => setCw(parseFloat(event.target.value))}
        //         />
        //     </div>

        //     <div className="flex-col">
        //         <label>Podaj m: </label>
        //         <input className="border rounded-lg p-1"
        //                 type='number'
        //                 step="any"
        //                 value={m}
        //                 onChange={(event) => setM(parseFloat(event.target.value))}
        //         />
        //     </div>

        //     <div>
        //         <button className="bg-blue-700 hover:bg-blue-500 py-2 px-6 rounded-md text-white-700 transition duration-300">
        //             Oblicz
        //         </button>
        //     </div>
        // </div>
    )
}