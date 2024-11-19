import { useProjects } from '@/hooks/useProjects';
import NoProjects from '@/components/NoProjects';
import ProjectItem from '@/components/ProjectItem';

export default function ProjectsPage() {
    const projects = useProjects();

    if (!projects.length) {
        return <NoProjects />
    }
    
    return (
        <section className='pl-1 pr-2'>
            <div className='flex justify-center gap-3 content:gap-1.5 flex-wrap py-5 content:justify-between'>
                {(projects.map(project => (
                    <ProjectItem project={project} key={project.id} />
                )))}
            </div>
        </section>
    );
}
