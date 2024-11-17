import { useParams, Navigate } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { TriggerButton } from '@/components/TriggerButton';
import { ArrowsMaximizeIcon } from '@/components/Icons';

export default function ProjectPage() {
    const { name } = useParams();
    const projectValidation = useProjects(name!);

    if (!projectValidation.exists) {
        return <Navigate to='/error' />
    }

    const { project } = projectValidation;

    const clickHandler = () => {
        console.log('Yay open');
    }

    return (
        <section className='pt-5'>
            <div className='flex'>
                <div className='overflow-hidden flex justify-center items-center w-[250px] h-[160px] rounded-md border border-main-yellow/25'>
                    <div className='w-full h-full'>
                        <img
                            className='w-full h-full object-cover'
                            src={`../${project.image}`}
                            alt={`${project.id} image`}
                            title={`${project.id} image`}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='text-2xl'>
                            <h3>{ project.id }</h3>
                        </div>
                        <div>
                            <p>{ project.description }</p>
                        </div>
                    </div>
                    <div>
                        <TriggerButton
                            clickHandler={clickHandler}
                            className='text-main-white text-sm gap-1.5 px-3'
                            label='Open'
                            icon={<ArrowsMaximizeIcon size={18} />}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
}
