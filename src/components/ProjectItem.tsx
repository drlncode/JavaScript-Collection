import { Project } from '@/types/projects';

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <div>
            <div>
                { project.id }
                { project.description }
            </div>
        </div>
    );
}
