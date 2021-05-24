import classes from './ChannelsList.module.scss';
import ChannelCard from '../../components/ChannelCard/ChannelCard';
import { IChannelsList } from './types';
import clsx from 'clsx';
import { v4 } from 'uuid';

const ChannelsList: React.FC<IChannelsList> = ({ className, themeTitle, channels }) => {
    return (
        <div className={clsx(className, classes['channels-list'])}>
            <h4 className={classes['theme-title']}>{themeTitle}</h4>
            {channels?.length ? (
                <ul className={clsx('row', classes['list'])}>
                    {channels.map((item: any) => {
                        const { chid, title, logo } = item;
                        return (
                            <li key={v4()} className={classes['item']}>
                                <ChannelCard title={title} logo={logo} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Каналы не доступны</p>
            )}
        </div>
    );
};

export default ChannelsList;
