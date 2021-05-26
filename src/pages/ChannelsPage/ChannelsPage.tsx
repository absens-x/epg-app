import classes from './ChannelsPage.module.scss';

import Paper from '../../components/Paper/Paper';
import Search from '../../components/Search/Search';
import CategoriesList from '../../containers/CategoriesList/CategoriesList';
import ChannelsList from '../../containers/ChannelsList/ChannelsList';
import { ICategory } from '../../components/CategoryButton/types';
import { IChannel } from '../../components/ChannelCard/types';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { fetchCategoriesAction } from '../../store/actions/categoryActions';
import { fetchChannelsAction } from '../../store/actions/channelActions';

const ChannelsPage: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const categories: Array<ICategory> = useSelector((state: any) => state.category.categories);
    const channels: Array<IChannel> = useSelector((state: any) => state.channel.channels);

    useEffect(() => {
        dispatch(fetchCategoriesAction());
        dispatch(fetchChannelsAction());
    }, []);

    return (
        <main>
            <div className="container">
                <Paper className={classes['paper']}>
                    <Search />
                    <CategoriesList categories={categories} />
                </Paper>
                <h3 style={{ textAlign: 'center' }}>Список каналов</h3>
                <ChannelsList channels={channels} categories={categories} />
            </div>
        </main>
    );
};

export default ChannelsPage;
