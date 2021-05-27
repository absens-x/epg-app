import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import ChannelsPage from './pages/ChannelsPage/ChannelsPage';
import TVShowsPage from './pages/TVShowsPage/TVShowsPage';
import './sass/_index.scss';
import './services/EPGServerAPI';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={ChannelsPage} />
                <Route path="/program/list" component={TVShowsPage} />
            </Switch>
        </div>
    );
}

export default App;
