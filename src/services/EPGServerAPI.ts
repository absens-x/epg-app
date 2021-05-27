interface IEPGServerAPI {
    BASE_API: string;
    DEFAULT_DOMAIN: string;
}

export default class EPGServerAPI {
    private BASE_API = 'http://epg.domru.ru';
    private DOMAIN = '';
    private DEFAULT_DOMAIN = 'ekat';
    private CHANNEL_FILTERS = '';

    constructor(domain: string) {
        this.DOMAIN = domain || this.DEFAULT_DOMAIN;
    }

    public getResource = async (url: string) => {
        const query = this.BASE_API + url;
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
        const res = await this.getResource(`/channel/list?domain=${this.DOMAIN}`);
        return res;
    };

    public getChannelByID = async (id: string | number) => {
        const res = await this.getResource(`/channel/info?chid=${id}&domain=${this.DOMAIN}`);
        return res;
    };

    public setChannelsFilters = (filters: string): void => {
        this.CHANNEL_FILTERS = filters;
    };

    public getChannelsFilters = (): string => {
        return this.CHANNEL_FILTERS;
    };

    public getTVShows = async () => {
        const res = await this.getResource(``);
        return res;
    };
}

// const obj = new EPGServerAPI();

// obj.getAllThemes().then(res => console.log(JSON.stringify(res)));

// obj.getAllChannels().then(res => console.log(res))

// obj.getChannelByID(1).then(res => console.log(res));
