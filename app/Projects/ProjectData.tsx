import { ProjectId } from "../page";

export type Project = {
    id: number;
    displayName: string;
    name: ProjectId;
    description: string;
    added: Date
};

export const projects = [
  {
    id: 1,
    displayName: "Kalkulator ΔT",
    name: "CalculateTemperatureDelta" as ProjectId,
    description: "Kalkulator, obliczający deltę z T",
    added: new Date("2026-09-23")
  }
];