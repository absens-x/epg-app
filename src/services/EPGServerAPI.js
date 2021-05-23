class EPGServerAPI {
    BASE_API = "http://epg.domru.ru";
    CITY = ""
    FILTERS = ""

    constructor(city = "ekat") {
        this.CITY = city
    }
  
    getResource = async (url) => {
      const query = this.BASE_API + url;
      const res = await fetch(query);
  
      if (!res.ok) {
        throw new Error(`Ошибка при обращении к ресурсу ${query}. Status code: ${res.status}`);
      }

      return await res.json();
    };
  
    getAllThemes = async () => {
      const res = await this.getResource("/channeltheme/list");
      return res;
    };
  
    getAllChannels = async () => {
        const res = await this.getResource(`/channel/list?domain=${this.CITY}`);
        return res;
    };

    getChannelByID = async (id) => {
        const res = await this.getResource(`/channel/info?chid=${id}&domain=${this.CITY}`)
        return res
    }

    getTVShows = async () => {
      const res = await this.getResource(``)
      return res
  }
  }
  
  const obj = new EPGServerAPI();

// obj.getAllThemes().then(res => console.log(res));
  
// obj.getAllChannels().then(res => console.log(res))

// obj.getChannelByID(1).then(res => console.log(res));