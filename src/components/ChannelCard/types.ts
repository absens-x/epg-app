export interface IChannel {
    chid: string | number;
    title: string;
    biglogo: string | null;
    logo: string;
    description: string;
    url: string;
    hd: string | number;
    thid: string | number;
    display: string | number;
    xvid: string | number;
    button: string | number | null;
    bids: string | null;
}

export interface IChannelCard {
    className?: string;
    title: string;
    logo: string;
}
