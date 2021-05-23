import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import ChannelsPage from './pages/ChannelsPage/ChannelsPage';
import './sass/_index.scss';
import './services/EPGServerAPI';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={ChannelsPage} />
                {/* <Route path="/about" exact component={} /> */}
            </Switch>
        </div>
    );
}

export default App;
