import { Button } from '@/components/Button';
import { HomeIcon, ArrowNarrowRightIcon } from '@/components/Icons';

export default function NotFoundPage() {
    return (
        <section className='h-full pt-[50%] sm:pt-[20%]'>
            <div className='flex flex-col gap-10 h-full font-montserrat-300 px-4 text-center'>
                <div className='flex flex-col justify-center items-center gap-2 text-main-yellow'>
                    <div className='text-8xl'>
                        <h1>404</h1>
                    </div>
                    <div className='text-main-white'>
                        <p>The resource what you're looking for wasn't found.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 text-sm font-nunito-500'>
                    <Button
                        to='/'
                        external={false}
                        iconDirection='left'
                        label='Back to Home'
                        icon={<HomeIcon size={20} />}
                    />
                    <Button
                        to='/projects'
                        external={false}
                        iconDirection='right'
                        label='See Projects'
                        icon={<ArrowNarrowRightIcon size={20} />}
                    />
                </div>
            </div>
        </section>
    );
}
