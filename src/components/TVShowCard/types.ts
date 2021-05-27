export interface ITVShow {
    xvid: string | number;
    start: string;
    duration: string | number;
    title: string;
    desc: string;
    icon: string | null;
    tid: string | number;
}

export interface ITVShowCard extends ITVShow {
    className?: string;
    tid: string | number;
}
