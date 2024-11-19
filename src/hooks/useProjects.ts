import projectsJson from '@/data/projects.json';
import { Project } from '@/types/projects';

type ReturnedExistenceType = 
    { exists: true, project: Project } |
    { exists: false }

export function useProjects(): Project[];
export function useProjects(exists: string): ReturnedExistenceType;

export function useProjects(exists?: string): Project[] | ReturnedExistenceType {
    const projects = projectsJson as Project[];
    
    if (exists) {
        const project = projects.find(project => project.id === exists);
        
        return project
            ? { exists: true, project }
            : { exists: false }
    }

    return projects;
}
