import React from 'react';
import styled from 'styled-components';

const Col = ({ xxl, xl, lg, md, sm, xs, style, children, span = 24, gutter = [0, 0] }) => {
    return (React.createElement(ColumnContainer, { gutter: gutter, xxl: xxl, xl: xl, lg: lg, md: md, sm: sm, xs: xs, span: span, style: style }, children));
};
const ColumnContainer = styled.div `
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

const Row = ({ children, style, gutter = [0, 0], className }) => {
    const length = children === null || children === void 0 ? void 0 : children.length;
    if (typeof children === 'string') {
        throw new Error('A child of a <Row> component can only be a <Col> component.');
    }
    if (length > 0) {
        const _children = children;
        return (React.createElement(RowContainer, { style: style, className: className }, _children.map((child, index) => {
            if (!child) {
                return null;
            }
            if ((child === null || child === void 0 ? void 0 : child.type) !== Col)
                throw new Error('A child of a <Row> component can only be a <Col> component.');
            return React.cloneElement(child, { gutter, key: index });
        })));
    }
    else {
        if ((children === null || children === void 0 ? void 0 : children.type) !== Col || !children)
            throw new Error('A child of a <Row> component can only be a <Col> component.');
        return (React.createElement(RowContainer, { style: style, className: className }, React.cloneElement(children, { gutter })));
    }
};
const RowContainer = styled.div `
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

export { Col, Row };
//# sourceMappingURL=index.es.js.map
