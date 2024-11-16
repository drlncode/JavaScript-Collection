import { Link } from 'react-router-dom';
import { ExternalLink } from './ExternalLink';

interface Props {
    to: string;
    external: boolean;
    label: string;
    icon: React.ReactNode;
}

export function ProjectItemButton({ to, external, label, icon }: Props) {
    const Container = external ? ExternalLink : Link;

    return (
        <Container to={to}>
            <div className='flex justify-center items-center gap-1.5 w-full py-1.5 px-2.5 text-sm border bg-main-black text-main-yellow border-main-yellow rounded transition-colors duration-standar hover:bg-main-yellow hover:text-main-black'>
                <div>
                    <span>{ label }</span>
                </div>
                <div>
                    { icon }
                </div>
            </div>
        </Container>
    );
}
