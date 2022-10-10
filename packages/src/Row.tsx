import React from 'react';
import styled from 'styled-components';
import Col from './Col';

export interface RowProps {
	children: any;
	style?: React.CSSProperties;
	gutter?: [number, number];
	className?: string;
}

const Row = ({ children, style, gutter = [0, 0], className }: RowProps) => {
	const length = children?.length;



	if (typeof children === 'string') {
		throw new Error('A child of a <Row> component can only be a <Col> component.');
	}

	if (length > 0) {
		const _children = children;
		return (
			<RowContainer style={style} className={className}>
				{_children.map((child: any, index: number) => {
					if(!child) {
						return null;
					}
					if (child?.type !== Col) throw new Error('A child of a <Row> component can only be a <Col> component.');
					return React.cloneElement(child as any, { gutter, key: index });
				})}
			</RowContainer>
		);
	} else {
		if (children?.type !== Col || !children) throw new Error('A child of a <Row> component can only be a <Col> component.');
		return (
			<RowContainer style={style} className={className}>
				{React.cloneElement(children as any, { gutter })}
			</RowContainer>
		);
	}
};

const RowContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

export default Row;
