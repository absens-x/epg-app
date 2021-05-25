export interface IChannelSimilar {
    chid: string | number;
    title: string;
    biglogo: string | null;
    logo: string;
    hd: string | number;
}

export interface IChannelInfoData {
    chid: string | number;
    title: string;
    logo: string;
    biglogo: string | null;
    description: string;
    hd: string | number;
    url: string | number;
    display: string | number;
    xvid: string | number;
    thid: string | number;
    theme: string;
    button: string | number;
    digit: number[];
    similar: IChannelSimilar[];
}

export interface IChannelInfo {
    className?: string;
    title: string;
    logo: string;
    desc: string;
}
