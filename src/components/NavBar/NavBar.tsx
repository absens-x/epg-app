import clsx from 'clsx';
import classes from './NavBar.module.scss';
import { INavBar } from './types';

const NavBar: React.FC<INavBar> = ({ className }) => {
    return (
        <nav className={clsx(className, classes['navbar'])}>
            <div className={classes['inner']}>
                <ul className={clsx('row', classes['list'])}>
                    <li className={classes['item']}>
                        <a href="/">Каналы</a>
                    </li>
                    <li className={classes['item']}>
                        <a href="/">Пакеты</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
