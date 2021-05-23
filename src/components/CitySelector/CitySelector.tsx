import clsx from 'clsx';
import React from 'react';
import classes from './CitySelector.module.scss';

interface ICitySelector {
    className?: string;
}

const CitySelector: React.FC<ICitySelector> = ({ className }) => {
    return (
        <div className={clsx(className, classes['city-selector'])}>
            <a className={classes['selector']} href="">
                Барнаул
            </a>
        </div>
    );
};

export default CitySelector;
