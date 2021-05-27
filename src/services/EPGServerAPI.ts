interface IEPGServerAPI {
    baseApi: string;
    defaultDomain: string;
}

export default class EPGServerAPI {
    private baseApi: string = 'http://epg.domru.ru';
    private domain: string = '';
    private defaultDomain: string = 'ekat';
    private channelFfilters: string = '';

    constructor(domain: string) {
        this.domain = domain || this.defaultDomain;
    }

    public getResource = async (url: string) => {
        const query: string = this.baseApi + url;
        const res = await fetch(query);

        if (!res.ok) {
            throw new Error(`Ошибка при обращении к ресурсу ${query}. Status code: ${res.status}`);
        }

        return await res.json();
    };

    public getAllCategories = async () => {
        const res = await this.getResource('/channeltheme/list');
        return res;
    };

    public getAllChannels = async () => {
        const res = await this.getResource(`/channel/list?domain=${this.domain}`);
        return res;
    };

    public getChannelByID = async (id: string | number) => {
        const res = await this.getResource(`/channel/info?chid=${id}&domain=${this.domain}`);
        return res;
    };

    public getChannelTVShows = async (xvid: string | number) => {
        const dateFrom = '2021-05-27';
        const dateTo = '2021-05-28';

        const res = await this.getResource(
            `/program/list?digit=1&date_from=${dateFrom}&date_to=${dateTo}&xvid[0]=${xvid}&domain=${this.domain}`,
        );
        return res;
    };

    public getDomainName(): string {
        return this.domain;
    }

    public setDomainName(domain: string): void {
        this.domain = domain;
    }

    public setChannelsFilters(filters: string): void {
        this.channelFfilters = filters || '';
    }

    public getChannelsFilters(): string {
        return this.channelFfilters;
    }
}

// const obj = new EPGServerAPI();

// obj.getAllThemes().then(res => console.log(JSON.stringify(res)));

// obj.getAllChannels().then(res => console.log(res))

// obj.getChannelByID(1).then(res => console.log(res));
