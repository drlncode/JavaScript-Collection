import { twMerge } from 'tailwind-merge';

export function ExternalLink({ to, label, children, className }: {
    to: string;
    label?: string;
    children?: React.ReactNode
    className?: string;
}) {
    return (
        <a
            href={to}
            target='_blank'
            className={twMerge(
                '',
                className
            )}
        >{ label || children }</a>
    );
}
