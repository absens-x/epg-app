import classes from './Paper.module.scss';
import clsx from 'clsx';
import { IPaper } from './types';

const Paper: React.FC<IPaper> = ({ className, children }) => {
    return <div className={clsx(className, classes['paper'])}>{children}</div>;
};

export default Paper;
