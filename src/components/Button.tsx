import { Link } from 'react-router-dom';
import { ExternalLink } from './ExternalLink';

interface Props {
    to: string;
    icon: React.ReactNode;
    external: boolean;
    iconDirection: 'left' | 'right'
    label?: string;
    children?: React.ReactNode;
}

export function Button({ to, icon, external, iconDirection, label, children }: Props) {
    const Container = external ? ExternalLink : Link;
    const textContent = <span>{ label || children || 'Insert text' }</span>;
    const iconContent = icon;
    
    return (
        <Container to={to}>
            <div className='flex justify-center items-center gap-2 p-2 border border-main-yellow w-fit min-w-[140px] rounded transition-all duration-standar hover:bg-main-yellow hover:text-main-black'>
                <div>
                    { iconDirection === 'left' ? iconContent : textContent }
                </div>
                <div>
                    { iconDirection === 'right' ? iconContent : textContent }
                </div>
            </div>
        </Container>
    );
}
