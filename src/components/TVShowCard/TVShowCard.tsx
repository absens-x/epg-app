import classes from './TVShowCard.module.scss';
import { ITVShowCard } from './types';
import preview from '../../assets/img/tvshow_preview.jpg';
import clsx from 'clsx';
const moment = require('moment');

const TVShowCard: React.FC<ITVShowCard> = ({ className, title, desc, icon, start, duration }) => {
    const date: Date = new Date(start);
    const startTimeLabel: string = moment(date).format('HH:mm');
    const isFinished: boolean = Date.now() > date.getTime() + Number(duration) * 60;

    return (
        <div className={clsx(className, classes['tvshow'], isFinished ? classes['finished'] : null)}>
            <div className={classes['preview']}>
                <img
                    src={icon ? `https://ekat.domru.ru/epgservice/ertelecomipfile/pic/${icon}` : preview}
                    alt="preview"
                />
            </div>

            <p className={classes['info']}>
                <span className={classes['time']}> {startTimeLabel} </span>
                <span className={classes['title']}>
                    - {title} {isFinished && '( Передача завершена )'}
                </span>
            </p>
            <p className={classes['desc']}>{desc}</p>
        </div>
    );
};

export default TVShowCard;
