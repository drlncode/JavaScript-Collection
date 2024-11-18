import { twMerge } from 'tailwind-merge';

interface Props {
    label?: string;
    icon?: React.ReactNode;
    className?: string;
    clickHandler: () => void;
}

export function TriggerButton({ label, icon, className, clickHandler }: Props) {
    return (
        <button
            onClick={clickHandler}
            className={twMerge(
                'flex justify-center items-center p-2 bg-main-black text-main-yellow border border-main-yellow rounded transition-colors duration-standar hover:bg-main-yellow hover:text-main-black',
                className
            )}
        >
            <div>
                <p>{ label || 'Click' }</p>
            </div>
            { icon && <div>{ icon }</div> }
        </button>
    );
}
