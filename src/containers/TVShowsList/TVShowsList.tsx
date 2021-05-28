import classes from './TVShowsList.module.scss';
import { ITVShowsList } from './types';
import clsx from 'clsx';
import { v4 } from 'uuid';
import TVShowCard from '../../components/TVShowCard/TVShowCard';
import { ITVShow } from '../../components/TVShowCard/types';

const TVShowsList: React.FC<ITVShowsList> = ({ className, tvshows }) => {
    return (
        <div className={clsx(className, classes['tvshows-list'])}>
            {tvshows.length ? (
                <ul className={classes['list']}>
                    {tvshows.map((item: ITVShow) => {
                        return (
                            <li key={v4()} className={classes['item']}>
                                <TVShowCard {...item} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Телепрограмма не доступна</p>
            )}
        </div>
    );
};

export default TVShowsList;
