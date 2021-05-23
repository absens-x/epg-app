import classes from './Search.module.scss';
import searchIcon from '../../assets/img/search_16px.svg';

const Search = () => {
    return (
        <span className={classes['search']}>
            <input placeholder="Поиск каналов" className={classes['input']} type="text" />
            <button className={classes['submit-btn']}>
                <img src={searchIcon} alt="search-btn" />
            </button>
        </span>
    );
};

export default Search;
