import projects from '@/data/projects.json';
import ProjectItem from '@/components/ProjectItem';

export default function ProjectsPage() {
    return (
        <section className=''>
            {(projects.map(project => (
                <ProjectItem project={project} />
            )))}
        </section>
    );
}
