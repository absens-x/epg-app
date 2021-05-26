import clsx from 'clsx';
import classes from './CategoryButton.module.scss';
import { ICategoryButton } from './types';

const CategoryButton: React.FC<ICategoryButton> = ({ className, title, selected = false, onSelectCategory }) => {
    const cls = [className, classes['button']];

    function onClickHandle(): void {
        onSelectCategory();
    }

    if (selected) {
        cls.push(classes['selected']);
    }
    return (
        <button onClick={onClickHandle} className={clsx(cls)}>
            {title}
        </button>
    );
};

export default CategoryButton;
