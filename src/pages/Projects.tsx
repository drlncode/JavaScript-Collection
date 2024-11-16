import projects from '@/data/projects.json';
import ProjectItem from '@/components/ProjectItem';

export default function ProjectsPage() {
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
