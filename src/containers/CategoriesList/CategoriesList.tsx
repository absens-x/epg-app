import clsx from 'clsx';
import { v4 } from 'uuid';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import classes from './CategoriesList.module.scss';
import { ICategoriesList } from './types';
import { ICategory } from '../../components/CategoryButton/types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategoryIdAction } from '../../store/actions/categoryActions';

const CategoriesList: React.FC<ICategoriesList> = ({ className, categories }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const selectedId: number | null = useSelector((state: any) => state.category.selectedId);
    const dispatch = useDispatch();

    function onSelectCategoryId(id: null | number | string) {
        dispatch(setSelectedCategoryIdAction(id));
        setIsSelected(!isSelected);
    }

    useEffect(() => {
        if (isSelected) {
        } else {
            dispatch(setSelectedCategoryIdAction(null));
        }
    }, [isSelected]);

    return (
        <div className={clsx(className, classes['categories-list'])}>
            {categories.length ? (
                <ul className={clsx('row-mg', classes['list'])}>
                    {categories.map((category: ICategory) => (
                        <li key={v4()} className={classes['item']}>
                            <CategoryButton
                                thid={category.thid}
                                selected={isSelected}
                                onSelectCategoryId={onSelectCategoryId}
                                title={category.name}
                            />
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
