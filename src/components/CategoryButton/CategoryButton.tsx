import clsx from 'clsx';
import classes from './CategoryButton.module.scss';
import { ICategoryButton } from './types';

const CategoryButton: React.FC<ICategoryButton> = ({
    className,
    thid,
    title,
    selected = false,
    onSelectCategoryId,
}) => {
    const cls = [className, classes['button']];

    if (selected) {
        cls.push(classes['selected']);
    }
    return (
        <button onClick={() => onSelectCategoryId(thid)} className={clsx(cls)}>
            {title}
        </button>
    );
};

export default CategoryButton;
