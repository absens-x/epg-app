import { ICategory } from '../../components/CategoryButton/types';
import { IChannel } from '../../components/ChannelCard/types';

export interface IChannelsList {
    className?: string;
    channels: Array<IChannel>;
    categories: Array<ICategory>;
}
