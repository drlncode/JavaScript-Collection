import { Project } from '@/types/projects';

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <div className='group w-64 p-2 mb-1 border border-main-yellow/40 rounded-lg duration-200 transition-colors hover:border-main-yellow/80 hover:shadow-project relative overflow-hidden'>
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
            <div className='invisible select-none content:visible content:select-auto absolute duration-200 transition-colors bg-main-black/40 w-full h-full top-0 left-0 group-hover:bg-transparent'></div>
        </div>
    );
}
