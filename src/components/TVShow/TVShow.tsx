import classes from './TVShow.module.scss';
import { ITVShow } from './types';
import preview from '../../assets/img/tvshow_preview.jpg';
import clsx from 'clsx';

const TVShow: React.FC<ITVShow> = ({ className, title, desc, icon, start, duration }) => {
    const startTime: string = new Date(start).toLocaleTimeString();

    return (
        <div className={clsx(className, classes['tvshow'])}>
            <div className={classes['preview']}>
                {/* <img src={`https://epg.domru.ru/program/image?id=${icon}`} alt="preview" /> */}
                <img src={preview} alt="" />
                <div className={classes['progress-bar']}>
                    <span></span>
                </div>
            </div>

            <p className={classes['info']}>
                <span className={classes['time']}>{startTime}</span>
                <span className={classes['title']}> - {title}</span>
            </p>
            <p className={classes['desc']}>{desc}</p>
        </div>
    );
};

export default TVShow;
