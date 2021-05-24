import classes from './TVShowsList.module.scss';
import { ITVShowsList } from './types';
import clsx from 'clsx';
import { v4 } from 'uuid';
import TVShow from '../../components/TVShow/TVShow';
import { ITVShow } from '../../components/TVShow/types';

const TVShowsList: React.FC<ITVShowsList> = ({ className, tvshows }) => {
    return (
        <div className={clsx(className, classes['tvshows-list'])}>
            {tvshows?.length ? (
                <ul className={classes['list']}>
                    {tvshows.map((item: ITVShow) => {
                        return (
                            <li key={v4()} className={classes['item']}>
                                <TVShow {...item} />
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

export default TVShowsList;
