import clsx from 'clsx';
import classes from './CategoryButton.module.scss';

interface ICategoryButton {
    className?: string;
    selected?: boolean;
    title: string;
}

const CategoryButton: React.FC<ICategoryButton> = ({ className, title, selected = false }) => {
    const cls = [className, classes['button']];
    if (selected) {
        cls.push(classes['selected']);
    }
    return <button className={clsx(cls)}>{title}</button>;
};

export default CategoryButton;
