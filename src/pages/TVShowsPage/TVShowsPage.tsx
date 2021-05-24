import ChannelInfo from '../../components/ChannelInfo/ChannelInfo';
import classes from './TVShowsPage.module.scss';
import logo from '../../assets/img/chlogo2.png';
import TVShowsList from '../../containers/TVShowsList/TVShowsList';

const TVShowsPage: React.FC = () => {
    const tvshows = [
        {
            xvid: '3783',
            start: '2021-05-23 00:00:00',
            duration: '3900',
            title: 'Закрытая школа [16+]',
            desc: 'Сериал рассказывает о жизни элитной школы-интерната, расположенной в усадьбе посреди мрачного, но живописного леса',
            icon: '2441795?size=560x315',
            tid: '363',
        },
        {
            xvid: '3783',
            start: '2021-05-23 01:05:00',
            duration: '3900',
            title: 'Сенсация или провокация [12+]',
            desc: 'Сенсационные гипотезы, научные открытия, шокирующие прогнозы в нашей программе',
            icon: '1441825?size=560x315',
            tid: '3353',
        },
        {
            xvid: '3783',
            start: '2021-05-23 02:10:00',
            duration: '3000',
            title: 'В мире чудес [12+]',
            desc: 'Цикл документальных фильмов-исследований жизни людей и явлений нашего времени. Это срез нашей собственной жизни',
            icon: '1441820?size=560x315',
            tid: '3353',
        },
    ];

    return (
        <main>
            <div className="container">
                <ChannelInfo
                    className={classes['channel-info']}
                    title="НТВ HD"
                    logo={logo}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit, quasi aperiam consectetur laboriosam reprehenderit quis est aliquid voluptas. Ad."
                />
                <h3>Телепрограмма на сегодня</h3>
                <TVShowsList tvshows={tvshows} />
            </div>
        </main>
    );
};

export default TVShowsPage;
