import clsx from 'clsx';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import classes from './CategoriesList.module.scss';
import { ICategoriesList } from './types';

const CategoriesList: React.FC<ICategoriesList> = ({ className, categories }) => {
    return (
        <div>
            {categories?.length ? (
                <ul className={clsx('row-mg', classes['list'])}>
                    {categories.map((item: any) => {
                        const { thid, name } = item;
                        return (
                            <li key={new Date().getTime() + thid} className={classes['item']}>
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
