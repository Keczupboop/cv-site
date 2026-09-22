import CodePanel from "./CodePanel";
import ProjectPanel from "./ProjectPanel";

export default function Project() {
    return (
        <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-6">
        
                {/* Header */}
                <header className="border-b border-gray-200 pb-4">
                    <h1 className="text-2xl font-bold text-green-300 sm:text-3xl">
                        Kalkulator ΔT
                    </h1>
                </header>

                {/* Main */}
                <main className="flex flex-row gap-6">
                {/* Project panel */}
                    <div className="w-1/2 bg-gray-600 rounded-xl shadow-sm border border-gray-600 p-4 overflow-hidden">
                        <ProjectPanel />
                    </div>

                    {/* Code panel */}
                    <div className="w-1/2 bg-gray-600 rounded-xl shadow-sm border border-gray-600 p-4 overflow-hidden">
                        <CodePanel />
                    </div>
                </main>

            </div>
        </div>

        // <div className="flex">
        //     <p>Tytuł</p>

        //     <div className="w-1/2">
        //         <ProjectPanel />
        //     </div>
            
        //     <div className="w-1/2">
        //         <CodePanel />
        //     </div>
        // </div>
    )
}