import CategoryButton from '../../components/CategoryButton/CategoryButton';
import Paper from '../../components/Paper/Paper';
import Search from '../../components/Search/Search';

const ChannelsPage: React.FC = () => {
    return (
        <main>
            <div className="container">
                <Paper>
                    <Search />
                    <CategoryButton title="Общедоступные" />
                </Paper>
            </div>
        </main>
    );
};

export default ChannelsPage;
