"use client";

import { Page } from "./page";

type MenuPanelProps = {
    page: string
    onPageChange: (selected: Page) => void;
}

export default function MenuPanel({ page, onPageChange }: MenuPanelProps) {
    return (
        <div className="flex justify-center">
            <div className="border-b border-slate-800/60 bg-slate-900/20 px-3 py-1.5 w-1/2 rounded-b-xl">
                <div className="flex justify-center items-center gap-3">
                    <button
                        className={`border-b rounded-lg px-2 py-1 hover:border-blue-600 transition-colors duration-300 ${
                            page === "Projekty" ? "border-blue-500" : "border-gray-300"
                        }`}

                        onClick={() => onPageChange("Projekty" as Page)}
                    >
                            Projekty
                    </button>

                    <button
                        className={`border-b rounded-lg px-2 py-1 hover:border-blue-600 transition-colors duration-300 ${
                            page === "O stronie" ? "border-blue-500" : "border-gray-300"
                        }`}

                        onClick={() => onPageChange("O stronie" as Page)}
                    >
                            O stronie
                    </button>
                </div> 
            </div>
        </div>
    )
}