import projects from '@/data/projects.json';
import ProjectItem from '@/components/ProjectItem';

export default function ProjectsPage() {
    return (
        <section className='px-1.5'>
            <div className='flex justify-center gap-1.5 flex-wrap pt-8 content:justify-between'>
                {(projects.map(project => (
                    <ProjectItem project={project} key={project.id} />
                )))}
            </div>
        </section>
    );
}
