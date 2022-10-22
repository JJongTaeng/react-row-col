import React, { HTMLAttributes } from 'react';
export interface RowProps {
    children: any;
    style?: React.CSSProperties;
    gutter?: [number, number];
    className?: string;
    props?: HTMLAttributes<HTMLDivElement>;
}
declare const Row: ({ children, style, gutter, className, ...props }: RowProps) => JSX.Element;
export default Row;
