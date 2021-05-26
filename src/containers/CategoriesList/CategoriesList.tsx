import clsx from 'clsx';
import { v4 } from 'uuid';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import classes from './CategoriesList.module.scss';
import { ICategoriesList } from './types';
import { ICategory } from '../../components/CategoryButton/types';
import { useState } from 'react';

const CategoriesList: React.FC<ICategoriesList> = ({ className, categories }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    function onSelectCategory() {}

    return (
        <div className={clsx(className, classes['categories-list'])}>
            {categories.length ? (
                <ul className={clsx('row-mg', classes['list'])}>
                    {categories.map((item: ICategory) => (
                        <li key={v4()} className={classes['item']}>
                            <CategoryButton onSelectCategory={onSelectCategory} title={item.name} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Категории не доступны</p>
            )}
        </div>
    );
};

export default CategoriesList;
