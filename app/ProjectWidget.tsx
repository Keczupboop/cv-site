"use client";

import { ProjectId } from "./page";
import CalculateTemperatureDelta from "./Projects/CalculateTemperatureDelta";
import { Project } from "./Projects/ProjectData";


type ProjectWidgetProps = {
    project: Project
    onSelected: (project: ProjectId) => void;
}

export default function ProjectWidget({ project, onSelected }: ProjectWidgetProps) {
    const formattedDate = new Date(project.added).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="border border-gray-600/70 border-2 rounded-xl">
            <div>
                <header className="pl-1 w-1/2 border-b border-gray-200 pb-1">
                    <h1 className="text-base font-bold text-green-300 sm:text-2xl">
                        {project.displayName}
                    </h1>
                </header>
            </div>
            <div className="pl-1">
                <label>
                    {/*Description*/}
                    {project.description}
                </label>
            </div>

            <div className="flex items-end justify-between mt-4">
                <label className="font-medium text-gray-500 pl-1">
                    Dodano: {formattedDate}
                </label>

                <button 
                    className="px-2 py-1.5 border border-green-500/40 rounded-xl bg-green-800"
                    onClick={() => {onSelected(project.name)}}
                >
                    Wejdź
                </button>
            </div>
        </div>
    )
}