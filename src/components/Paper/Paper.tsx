import classes from './Paper.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface IPaper {
    children: ReactNode;
    className?: string;
}

const Paper: React.FC<IPaper> = ({ children, className }) => {
    return <div className={clsx(className, classes['paper'])}>{children}</div>;
};

export default Paper;
