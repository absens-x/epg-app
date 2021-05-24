import classes from './ChannelsPage.module.scss';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import Paper from '../../components/Paper/Paper';
import Search from '../../components/Search/Search';
import CategoriesList from '../../containers/CategoriesList/CategoriesList';
import ChannelsList from '../../containers/ChannelsList/ChannelsList';

const ChannelsPage: React.FC = () => {
    const categories: any = [
        { thid: '1', name: 'Общедоступные', plural: 'Общедоступные', alias: 'polit', weight: '0' },
        { thid: '6', name: 'Фильмовые', plural: 'Фильмовые', alias: 'film', weight: '1' },
        { thid: '2', name: 'Развлекательные', plural: 'Развлекательные', alias: 'party', weight: '2' },
        { thid: '7', name: 'Познавательные', plural: 'Познавательные', alias: 'brain', weight: '3' },
        { thid: '10', name: 'Спортивные', plural: 'Спортивные', alias: 'sport', weight: '4' },
        { thid: '11', name: 'Детские', plural: 'Детские', alias: 'kinder', weight: '5' },
        { thid: '13', name: 'Музыкальные', plural: 'Музыкальные', alias: 'music', weight: '6' },
        { thid: '12', name: 'Новостные', plural: 'Новостные', alias: 'news', weight: '7' },
        { thid: '51', name: 'Национальные', plural: 'Национальные', alias: 'etno', weight: '8' },
        { thid: '52', name: 'Религиозные', plural: 'Религиозные', alias: 'religia', weight: '9' },
        { thid: '61', name: 'Канал подарков', plural: 'Канал подарков', alias: 'podarki', weight: '10' },
    ];

    const channels: any = [
        {
            chid: '7483',
            title: '7tv',
            biglogo: null,
            logo: '/chlogo/1561102637.png',
            description:
                'Российский развлекательный телеканал. В эфире психологические, мистические, детективные фильмы и сериалы, документальные программы об устройстве Вселенной, программы о психологии и психологические ток-шоу.',
            url: 'http://7-tv.tv/',
            hd: '0',
            thid: '1',
            display: '3',
            xvid: '3783',
            button: '34',
            bids: '10,26,29,28,58,59,60,90,91,92,101',
        },
        {
            chid: '3841',
            title: '8 канал',
            biglogo: null,
            logo: '/chlogo/1474886439.png',
            description:
                'Восьмой канал – информационно-развлекательный телеканал. В эфире: художественные фильмы, аналитические материалы, интервью со знаменитыми музыкантами и киноактерами, погода на каждый день, юмористические и кулинарные телепроекты, информационные выпуски, утренние и развлекательные шоу.',
            url: 'http://www.8tv.ru/',
            hd: '0',
            thid: '1',
            display: '3',
            xvid: '31',
            button: '32',
            bids: '10,26,29,28,36,58,59,60,90,91,92',
        },
        {
            chid: '7003',
            title: 'Da Vinci',
            biglogo: null,
            logo: '/chlogo/1605010260.png',
            description:
                'Это новаторский и единственный в своем роде образовательный канал, который помогает любознательным людям всех возрастов открывать мир знаний!',
            url: 'https://www.davincikids.tv/ru/',
            hd: '0',
            thid: '1',
            display: '3',
            xvid: '62',
            button: '409',
            bids: '10,26,29,28,50,58,59,90,91,92,101',
        },
        {
            chid: '312',
            title: 'Дом.ru Гид',
            biglogo: null,
            logo: '/chlogo/1474872377.png',
            description:
                'В эфире анонсы телепередач и обновления в сети Дом.ru, курсы валют, прогноз погоды, конкурсы, акции и фильмы. Канал познакомит с дополнительными сервисами, научит подключать и использовать ТВ-приставки, ответит на самые частые вопросы клиентов.',
            url: 'http://www.domru.ru',
            hd: '1',
            thid: '1',
            display: '2',
            xvid: '831',
            button: null,
            bids: null,
        },
    ];

    return (
        <main>
            <div className="container">
                <Paper className={classes['paper']}>
                    <Search />
                    <CategoriesList categories={categories} />
                </Paper>
                <h3 style={{ textAlign: 'center' }}>Список каналов</h3>
                <ChannelsList themeTitle="Общедоступные" channels={channels} />
            </div>
        </main>
    );
};

export default ChannelsPage;
