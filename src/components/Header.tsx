import { Link } from 'react-router-dom';
import { GithubIcon } from '@/components/Icons';

export default function Header() {
    return (
        <header className='bg-main-black fixed w-full max-w-[800px] border-b border-b-main-yellow'>
            <div className='flex justify-between px-9 pb-4 pt-5'>
                <div className='*:p-2.5 *:transition-colors *:duration-standar'>
                    <Link to='/' className='hover:text-main-yellow/90'>Home</Link>
                    <Link to='/projects' className='hover:text-main-yellow/90'>Projects</Link>
                </div>
                <div className='transition-all duration-standar hover:scale-[1.15] hover:text-main-yellow/90'>
                    <a
                        href='https://github.com/drlncode/JavaScript-Collection'
                        target='_blank'
                    >
                        <div>
                            <GithubIcon size={22} />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
