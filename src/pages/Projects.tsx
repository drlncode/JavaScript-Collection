import projects from '@/data/projects.json';

export default function ProjectsPage() {
    return (
        <section>
            {(projects.map(project => (
                <div>
                    <h2>{ project.id }</h2>
                    <span>{ project.description }</span>
                    <img src={project.image} alt={project.id} />
                </div>
            )))}
        </section>
    );
}
