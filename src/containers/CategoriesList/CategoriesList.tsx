import clsx from 'clsx';
import { v4 } from 'uuid';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import classes from './CategoriesList.module.scss';
import { ICategoriesList } from './types';
import { CategoryIDType, ICategory } from '../../components/CategoryButton/types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategoryIdAction } from '../../store/actions/categoryActions';

const CategoriesList: React.FC<ICategoriesList> = ({ className, categories }) => {
    const selectedId: number | null = useSelector((state: any) => state.category.selectedId);
    const dispatch = useDispatch();

    function onSelectCategoryId(id: CategoryIDType) {
        dispatch(setSelectedCategoryIdAction(id));
    }

    return (
        <div className={clsx(className, classes['categories-list'])}>
            {categories.length ? (
                <ul className={clsx('row-mg', classes['list'])}>
                    <li className={classes['item']}>
                        <CategoryButton
                            thid={null}
                            onSelectCategoryId={onSelectCategoryId}
                            selected={selectedId === null}
                            title="Все каналы"
                        />
                    </li>
                    {categories.map((category: ICategory) => (
                        <li key={v4()} className={classes['item']}>
                            <CategoryButton
                                thid={category.thid}
                                onSelectCategoryId={onSelectCategoryId}
                                title={category.name}
                                selected={Number(selectedId) === Number(category.thid)}
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
