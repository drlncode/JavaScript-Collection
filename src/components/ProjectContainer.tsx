export default function ProjectContainer({ src }: { src: string }) {
    return (
        <iframe
            src={src}
            className='w-full h-full rounded-md'
        ></iframe>
    );
}
