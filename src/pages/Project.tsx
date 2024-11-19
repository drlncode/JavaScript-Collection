import { useParams, Navigate } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { useModals } from '@/hooks/useModals';
import { TriggerButton } from '@/components/TriggerButton';
import { ArrowsMaximizeIcon } from '@/components/Icons';
import ProjectContainer from '@/components/ProjectContainer';

export default function ProjectPage() {
    const { name } = useParams();
    const { setModal } = useModals();
    const projectValidation = useProjects(name!);

    if (!projectValidation.exists) {
        return <Navigate to='/error' />
    }

    const { project } = projectValidation;

    const openClickHandler = () => {
        setModal(
            <ProjectContainer src={`../${project.index}`} />
        );
    }

    return (
        <section className='pt-10 font-montserrat-300 px-[46px]'>
            <div className='flex flex-col gap-3 content:flex-row'>
                <div className='w-full h-[180px] overflow-hidden flex justify-center items-center content:w-[350px] rounded-md border border-main-yellow/25'>
                    <div className='w-full h-full'>
                        <img
                            className='w-full h-full object-cover'
                            src={`../${project.image}`}
                            alt={`${project.name} image`}
                            title={`${project.name} image`}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4 content:pl-4'>
                    <div className='flex flex-col gap-1.5 content:w-3/4'>
                        <div className='text-2xl'>
                            <h3>{ project.name }</h3>
                        </div>
                        <div className='text-main-white/70 text-sm'>
                            <p>{ project.description }</p>
                        </div>
                    </div>
                    <div className='font-nunito-500'>
                        <TriggerButton
                            clickHandler={openClickHandler}
                            className='text-main-white text-sm gap-1.5 px-3'
                            label='Open'
                            icon={<ArrowsMaximizeIcon size={18} />}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-7 pt-7 pb-10 border-t border-t-main-yellow'>
                <div className='flex justify-center items-center w-full h-full rounded overflow-hidden'>
                    <div>
                        <img
                            className='object-contain'
                            src={`../${project.image}`}
                            alt={`${project.name} image`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
