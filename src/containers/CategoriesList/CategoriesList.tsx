import clsx from 'clsx';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import classes from './CategoriesList.module.scss';
import { ICategoriesList } from './types';
import { v4 } from 'uuid';
import { ICategory } from '../../components/CategoryButton/types';

const CategoriesList: React.FC<ICategoriesList> = ({ className, categories }) => {
    return (
        <div>
            {categories?.length ? (
                <ul className={clsx('row-mg', classes['list'])}>
                    {categories.map((item: ICategory) => {
                        const { name } = item;
                        return (
                            <li key={v4()} className={classes['item']}>
                                <CategoryButton title={name} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Категории не доступны</p>
            )}
        </div>
    );
};

export default CategoriesList;
