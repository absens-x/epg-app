interface IEPGServerAPI {}

export default class EPGServerAPI {
    private BASE_API = 'http://epg.domru.ru';
    private CITY = '';
    private FILTERS = '';

    constructor(city = 'ekat') {
        this.CITY = city;
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
        const res = await this.getResource(`/channel/list?domain=${this.CITY}`);
        return res;
    };

    public getChannelByID = async (id: string | number) => {
        const res = await this.getResource(`/channel/info?chid=${id}&domain=${this.CITY}`);
        return res;
    };

    public getTVShows = async () => {
        const res = await this.getResource(``);
        return res;
    };
}

const obj = new EPGServerAPI();

// obj.getAllThemes().then(res => console.log(JSON.stringify(res)));

// obj.getAllChannels().then(res => console.log(res))

// obj.getChannelByID(1).then(res => console.log(res));
