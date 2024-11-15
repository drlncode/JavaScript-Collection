import projects from '@/data/projects.json';

export default function ProjectsPage() {
    return (
        <section>
            {(projects.map(project => (
                <div>
                    { project.id }
                    <img src={project.image} alt={project.id} />
                </div>
            )))}
        </section>
    );
}
