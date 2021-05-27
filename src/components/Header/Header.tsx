import React from 'react';
import clsx from 'clsx';

import classes from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import CitySelector from '../CitySelector/CitySelector';
import NavBar from '../NavBar/NavBar';

import { IHeader } from './types';
import { NavLink } from 'react-router-dom';

const Header: React.FC<IHeader> = ({ className }) => {
    return (
        <div className={clsx(className, classes['header'])}>
            <div className={classes['wrap']}>
                <div className="container">
                    <div className={clsx('row-mg', classes['inner'])}>
                        <div className={classes['logo']}>
                            <NavLink to="/">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <CitySelector className={classes['city-selector']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
