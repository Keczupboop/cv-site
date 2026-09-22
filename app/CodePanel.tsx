"use client";

import { useState } from "react"

export default function CodePanel() {
    const [language, setLanguage] = useState("ts")

    return (
        <div className="w-full rounded-xl border border-gray-800 bg-slate-950 text-slate-100 shadow-xl overflow-hidden font-sans my-8">
            <div className="flex items-center justify-between border-b border-gray-800 bg-slate-900/80 px-3 py-1.5">
                {/* Zakładki */}
                <div className="flex items-center gap-1">
                <button
                    onClick={() => setLanguage("ts")}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer 
                    ${ language === "ts"
                        ? "bg-slate-800 text-blue-400 shadow-sm border border-slate-700/60"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                >
                    <span className="font-bold text-blue-400">TS</span>
                    TypeScript
                </button>

                <button
                    onClick={() => setLanguage("py")}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                    language === "py"
                        ? "bg-slate-800 text-yellow-400 shadow-sm border border-slate-700/60"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                >
                    <span className="font-bold text-yellow-400">PY</span>
                    Python
                </button>
                </div>

                {/* Przycisk kopiowania */}
                <button
                className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors cursor-pointer"
                >
                Skopiuj
                </button>
            </div>

            {/* Obszar kodu */}
            <div className="p-4 overflow-x-auto bg-slate-950">
                <pre className="font-mono text-sm leading-relaxed text-slate-200">
                <code>123</code>
                </pre>
            </div>
        </div>

        // <div className="border rounded-lg p-2">
        //     <div className="flex justify-center gap-10 border rounded-lg p-2">
        //         <button 
        //             onClick={() => setLanguage("ts")}
        //             className={language === "ts" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2 rounded"}>
        //                 Type Script
        //         </button>
        //         <button 
        //             onClick={() => setLanguage("py")}
        //             className={language === "py" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2 rounded"}>
        //                 Python
        //         </button>
        //     </div>
        
        //     {language === "ts" && (
        //         <p>Type Script</p>
        //     )}

        //     {language === "py" && (
        //         <p>Python</p>
        //     )}
        // </div>
    )
}