import { useParams, Navigate } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectPage() {
    const { name } = useParams();
    const projectValidation = useProjects(name!);

    if (!projectValidation.exists) {
        return <Navigate to='/error' />
    }

    const { project } = projectValidation;

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
                <div></div>
            </div>
            <div></div>
        </section>
    );
}
