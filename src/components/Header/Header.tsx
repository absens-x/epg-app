import React from 'react';
import clsx from 'clsx';

import classes from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import CitySelector from '../CitySelector/CitySelector';
import NavBar from '../NavBar/NavBar';

import { IHeader } from './types';

const Header: React.FC<IHeader> = ({ className }) => {
    return (
        <div className={clsx(className, classes['header'])}>
            <div className={classes['wrap']}>
                <div className="container">
                    <div className={clsx('row-mg', classes['inner'])}>
                        <div className={classes['logo']}>
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <CitySelector />
                        <NavBar className={classes['navbar']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
