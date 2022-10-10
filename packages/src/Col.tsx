import React from 'react';
import styled from 'styled-components';

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

interface ColumnWidthStyleType {
	xxl?: number;
	xl?: number;
	lg?: number;
	md?: number;
	sm?: number;
	xs?: number;
	span: number;
	gutter: [number, number];
}

export interface ColumnProps extends ColumnWidthType {
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

const Col = ({ xxl, xl, lg, md, sm, xs, style, children, span = 24, gutter = [0, 0] }: ColumnProps) => {
	return (
		<ColumnContainer gutter={gutter} xxl={xxl} xl={xl} lg={lg} md={md} sm={sm} xs={xs} span={span} style={style}>
			{children}
		</ColumnContainer>
	);
};

const ColumnContainer = styled.div<ColumnWidthStyleType>`
	padding: ${({ gutter }) => `${gutter[0]}px ${gutter[1]}px`};
	@media (max-width: 576px) {
		& {
			width: ${({ xs, span, gutter }) => `calc(${xs ? xs * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
	@media (min-width: 576px) and (max-width: 768px) {
		& {
			width: ${({ sm, span, gutter }) => `calc(${sm ? sm * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
	@media (min-width: 768px) and (max-width: 992px) {
		& {
			width: ${({ md, span, gutter }) => `calc(${md ? md * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
	@media (min-width: 992px) and (max-width: 1200px) {
		& {
			width: ${({ lg, span, gutter }) => `calc(${lg ? lg * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
	@media (min-width: 1200px) and (max-width: 1600px) {
		& {
			width: ${({ xl, span, gutter }) => `calc(${xl ? xl * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
	@media (min-width: 1600px) {
		& {
			width: ${({ xxl, span, gutter }) => `calc(${xxl ? xxl * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
		}
	}
`;

export default Col;
