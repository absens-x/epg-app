import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import classes from './CitySelector.module.scss';
import { ICitySelector } from './types';

const CitySelector: React.FC<ICitySelector> = ({ className }) => {
    const location: any = useSelector((state: any) => state.location);
    return (
        <div className={clsx(className, classes['city-selector'])}>
            <a className={classes['selector']} href="">
                {location.domains[location.currentDomainName]}
            </a>
        </div>
    );
};

export default CitySelector;
