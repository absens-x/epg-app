import classes from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import CitySelector from '../CitySelector/CitySelector';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import clsx from 'clsx';

const Header: React.FC = () => {
    return (
        <div className={classes['header']}>
            <div className={classes['wrap']}>
                <div className="container">
                    <div className={clsx('row-mg', classes['inner'])}>
                        <div className={classes['logo']}>
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <CitySelector className={classes['city-selector']} />
                        <NavBar className={classes['navbar']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
