import ProjectWidget from "../ProjectWidget";
import { projects } from "../Projects/ProjectData"
import { ProjectId } from "../page";

type ProjectsMenuProps = {
    onProjectSelect: (project: ProjectId) => void;
}

export default function ProjectsMenu({ onProjectSelect }: ProjectsMenuProps) {
    return (
        <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id}>
                        <ProjectWidget 
                            project = {project}
                            onSelected={onProjectSelect}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}