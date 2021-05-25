import { IChannel } from '../../components/ChannelCard/types';

export interface IChannelsList {
    className?: string;
    themeTitle: string;
    channels: IChannel[];
}
