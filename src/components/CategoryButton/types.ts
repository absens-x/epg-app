export interface ICategory {
    thid: string | number;
    name: string;
    plural: string;
    alias: string;
    weight: string | number;
}

export interface ICategoryButton {
    className?: string;
    selected?: boolean;
    title: string;
    onSelectCategory: () => void;
}
