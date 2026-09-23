import { JSX } from "react/jsx-runtime";
import CalculateTemperatureDelta from "./Projects/CalculateTemperatureDelta";

type ProjectPanelProps = {
    SelectedProject: () => JSX.Element
}

export default function ProjectPanel({ SelectedProject }: ProjectPanelProps) {
    return (
        <div>
            {SelectedProject && <SelectedProject />}
        </div>
    )
}