import ChannelInfo from '../../components/ChannelInfo/ChannelInfo';
import classes from './TVShowsPage.module.scss';
import TVShowsList from '../../containers/TVShowsList/TVShowsList';
import { ITVShow } from '../../components/TVShowCard/types';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchChannelInfoAction,
    fetchChannelTVShowsAction,
    setOpenChannelIDs,
} from '../../store/actions/channelActions';
import { IChannelInfoData } from '../../components/ChannelInfo/types';
import EPGServerAPI from '../../services/EPGServerAPI';

const TVShowsPage: React.FC<RouteComponentProps> = ({ location }) => {
    const queryParams: URLSearchParams = new URLSearchParams(location.search);
    const egpApi = new EPGServerAPI();
    const channelInfo: IChannelInfoData = useSelector((state: any) => state.channel.channelInfo);
    const tvshows = useSelector((state: any) => state.channel.tvshows);
    let channelTVShowsList: Array<ITVShow> = [];
    const dispatch = useDispatch();

    if (tvshows) {
        Object.keys(tvshows).forEach((item: string) => {
            channelTVShowsList = [...tvshows[item]];
        });
    }

    useEffect(() => {
        dispatch(
            setOpenChannelIDs({
                xvid: queryParams.get('xvid'),
                chid: queryParams.get('chid'),
            }),
        );
        dispatch(fetchChannelTVShowsAction());
        dispatch(fetchChannelInfoAction());
    }, []);

    return (
        <main>
            <div className="container">
                {channelInfo ? (
                    <ChannelInfo
                        className={classes['channel-info']}
                        title={channelInfo.title}
                        logo={egpApi.getBaseApi() + channelInfo.logo}
                        desc={channelInfo.description}
                    />
                ) : (
                    <p>Информация о канале не доступна</p>
                )}

                <h3>Телепрограмма на сегодня</h3>
                <TVShowsList tvshows={channelTVShowsList} />
            </div>
        </main>
    );
};

export default TVShowsPage;
