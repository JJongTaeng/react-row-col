import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Col from './Col';

export interface RowProps {
	children: any;
	style?: React.CSSProperties;
	gutter?: [number, number];
	className?: string;
	props?: HTMLAttributes<HTMLDivElement>;
}

const Row = ({ children, style, gutter = [0, 0], className, ...props }: RowProps) => {
	const length = children?.length;

	if (typeof children === 'string') {
		console.warn('A child of string type may not behave as intended for a Row component. Please use the Col component.')
		return <RowContainer style={style} className={className}>{children}</RowContainer>
	}

	if(length === 0) {
		return <RowContainer style={style} className={className} />
	}

	if (length > 0) {
		return (
			<RowContainer style={style} className={className}>
				{children.map((child: any, index: number) => {
					if (child?.type !== Col) {
						console.warn('A child of a <Row> component can only be a <Col> component.')
						return child;
					}
					return React.cloneElement(child as any, { gutter, key: index });
				})}
			</RowContainer>
		);
	} else {
		if (children?.type !== Col) {
			console.warn('A child of a <Row> component can only be a <Col> component.');
			return <RowContainer style={style} className={className}>
				{ children }
			</RowContainer>
		}
		return (
			<RowContainer style={style} className={className} {...props}>
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
