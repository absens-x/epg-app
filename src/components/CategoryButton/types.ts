export interface ICategory {
    thid: string | number;
    name: string;
    plural: string;
    alias: string;
    weight: string | number;
}

export interface ICategoryButton {
    thid: string | number;
    className?: string;
    selected?: boolean;
    title: string;
    onSelectCategoryId: (id: null | number | string) => void;
}
