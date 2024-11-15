import { Project } from '@/types/projects';

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <div className='w-64 p-2 mb-1 border border-main-yellow/40 rounded-lg transition-colors hover:border-main-yellow/80 hover:shadow-project'>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center max-w-60'>
                    <div className='flex justify-center items-center h-[130px] w-full overflow-hidden rounded-md border border-main-yellow/40'>
                        <img
                            className='w-full h-full object-cover'
                            src={project.image}
                            alt={`${project.id} image`}
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
