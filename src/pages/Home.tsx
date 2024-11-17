import { HighlightText } from '@/components/HighlightText';
import { Button } from '@/components/Button';
import { GithubIcon, ArrowNarrowRightIcon } from '@/components/Icons';

export default function HomePage() {
    return (
        <section className='h-full pt-[50%] sm:pt-[20%]'>
            <div className='flex flex-col gap-5 text-center font-montserrat-300 font-bold'>
                <div className='text-3xl px-5 sm:text-4xl md:px-0'>
                    <h1>drlncode's <HighlightText>JavaScript</HighlightText> Projects Collection.</h1>
                </div>
                <div className='w-full'>
                    <div className='w-[70%] m-auto'>
                        <p>Projects created with <HighlightText>JavaScript</HighlightText> as practice resource, organized into a SPA (Single Page Application) made with React + TailwindCSS.</p>
                    </div>
                </div>
            </div>
            <div className='text-sm flex justify-center items-center pt-10 gap-3 '>
                <Button
                    to='https://github.com/drlncode'
                    external={true}
                    iconDirection='left'
                    label='Github Profile'
                    icon={<GithubIcon />}
                />
                <Button
                    to='/projects'
                    external={false}
                    iconDirection='right'
                    label='See Projects'
                    icon={<ArrowNarrowRightIcon />}
                />
            </div>
        </section>
    );
}
