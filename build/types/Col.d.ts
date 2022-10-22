import React, { HTMLAttributes } from 'react';
interface ColumnWidthType {
    xxl?: number;
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    span?: number;
    gutter?: [number, number];
}
export interface ColumnProps extends ColumnWidthType {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    props: HTMLAttributes<HTMLDivElement>;
}
declare const Col: ({ xxl, xl, lg, md, sm, xs, style, children, span, gutter, ...props }: ColumnProps) => JSX.Element;
export default Col;
