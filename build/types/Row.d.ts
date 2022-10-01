import React from 'react';
export interface RowProps {
    children: any;
    style?: React.CSSProperties;
    gutter?: [number, number];
    className?: string;
}
declare const Row: ({ children, style, gutter, className }: RowProps) => JSX.Element;
export default Row;
