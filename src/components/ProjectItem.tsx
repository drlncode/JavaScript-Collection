import { Project } from '@/types/projects';
import { ProjectItemButton } from '@/components/ProjectItemButton';
import { CodeIcon, WorldIcon } from '@/components/Icons';

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <div className='group w-64 p-2 mb-1 pb-14 border border-main-yellow/40 rounded-lg transition-all duration-standar hover:border-main-yellow/80 hover:shadow-project relative overflow-hidden'>
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
                <div className='flex flex-col font-montserrat-300 pl-0.5 pb-1'>
                    <div className='text-xl py-1'>
                        <h2>{ project.id }</h2>
                    </div>
                    <div className='text-xs font-extralight'>
                        <p>{ project.description }</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 w-full h-fit pb-3 absolute bottom-0 left-0'>
                <ProjectItemButton
                    to={project.codeUrl}
                    external={true}
                    label='Code'
                    icon={<CodeIcon size={18} />}
                />
                <ProjectItemButton
                    to={`/projects/${project.id}`}
                    external={false}
                    label='Demo'
                    icon={<WorldIcon size={18} />}
                />
            </div>
            <div className='invisible select-none pointer-events-none content:visible content:select-auto absolute transition-colors duration-standar bg-main-black/40 w-full h-full top-0 left-0 group-hover:bg-transparent'></div>
        </div>
    );
}
