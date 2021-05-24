import clsx from 'clsx';
import Paper from '../Paper/Paper';
import classes from './ChannelInfo.module.scss';
import { IChannelInfo } from './types';

const ChannelInfo: React.FC<IChannelInfo> = ({ className, title, desc, logo }) => {
    return (
        <div className={clsx(className, classes['channel-info'])}>
            <Paper>
                <div className={clsx(classes['channel'], 'row-mg')}>
                    <span className={classes['logo']}>
                        <img src={logo} alt={title} />
                    </span>
                    <h4 className={classes['title']}>{title}</h4>
                </div>
                <p>{desc}</p>
            </Paper>
        </div>
    );
};

export default ChannelInfo;
