import clsx from 'clsx';
import classes from './ChannelCard.module.scss';

interface IChannelCard {
    className?: string;
    title: string;
    logo: string;
}

const ChannelCard: React.FC<IChannelCard> = ({ className, title, logo }) => {
    return (
        <div className={clsx(className, classes['channel'])}>
            <span className={classes['logo']}>
                <img src={`https://epg.domru.ru/${logo}`} alt={`${title} logo`} />
            </span>
            <p className={classes['title']}>{title}</p>
        </div>
    );
};

export default ChannelCard;
