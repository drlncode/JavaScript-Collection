import { Link } from 'react-router-dom';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink } from '@/components/ExternalLink';

export default function Header() {
    return (
        <header className='bg-main-black fixed w-full max-w-[800px] border-b border-b-main-yellow mb-1'>
            <div className='flex justify-between px-9 pb-4 pt-5'>
                <div className='*:p-2.5 *:transition-colors *:duration-standar'>
                    <Link to='/' className='hover:text-main-yellow'>Home</Link>
                    <Link to='/projects' className='hover:text-main-yellow'>Projects</Link>
                </div>
                <div className='transition-all duration-standar hover:scale-[1.15] hover:text-main-yellow/90'>
                    <ExternalLink to='https://github.com/drlncode/JavaScript-Collection'>
                        <div>
                            <GithubIcon size={22} />
                        </div>
                    </ExternalLink>
                </div>
            </div>
        </header>
    );
}
