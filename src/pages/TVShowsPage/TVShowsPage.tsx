import ChannelInfo from '../../components/ChannelInfo/ChannelInfo';
import classes from './TVShowsPage.module.scss';
import logo from '../../assets/img/chlogo2.png';
import TVShowsList from '../../containers/TVShowsList/TVShowsList';
import { ITVShow } from '../../components/TVShowCard/types';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannelTVShowsAction } from '../../store/actions/channelActions';

const TVShowsPage: React.FC<RouteComponentProps> = ({ location }) => {
    const queryParams: URLSearchParams = new URLSearchParams(location.search);
    const tvshows: Array<ITVShow> = useSelector((state: any) => state.channel.tvshows);
    const dispatch = useDispatch();

    console.log(tvshows);

    useEffect(() => {
        // fetch channel info
        dispatch(fetchChannelTVShowsAction(queryParams.get('xvid')));
    }, []);

    return (
        <main>
            <div className="container">
                <ChannelInfo
                    className={classes['channel-info']}
                    title="НТВ HD"
                    logo={logo}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit, quasi aperiam consectetur laboriosam reprehenderit quis est aliquid voluptas. Ad."
                />
                <h3>Телепрограмма на сегодня</h3>
                <TVShowsList tvshows={tvshows} />
            </div>
        </main>
    );
};

export default TVShowsPage;
