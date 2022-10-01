import React from 'react';
interface ColumnWidthType {
    xxl?: number;
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    span?: number;
    gutter?: [number, number];
    className?: string;
}
export interface ColumnProps extends ColumnWidthType {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
declare const Col: ({ xxl, xl, lg, md, sm, xs, style, children, span, gutter, className }: ColumnProps) => JSX.Element;
export default Col;
