import { FileSadIcon } from './Icons'

export default function NoProjects() {
    return (
        <div className='w-full h-full pt-36 grid place-content-center gap-2 text-main-yellow'>
            <div className='w-full flex justify-center'>
                <FileSadIcon size={70} />
            </div>
            <div className='text-lg font-montserrat-300 px-4 text-center text-main-white'>
                <h2>There are no projects currently available.</h2>
            </div>
        </div>
    )
}