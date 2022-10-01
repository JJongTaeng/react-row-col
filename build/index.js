'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Col = ({ xxl, xl, lg, md, sm, xs, style, children, span = 24, gutter = [0, 0] }) => {
    return (React__default["default"].createElement(ColumnContainer, { gutter: gutter, xxl: xxl, xl: xl, lg: lg, md: md, sm: sm, xs: xs, span: span, style: style }, children));
};
const ColumnContainer = styled__default["default"].div `
	transition: .2s;
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
    console.log(className);
    const length = children === null || children === void 0 ? void 0 : children.length;
    if (typeof children === 'string') {
        throw new Error('A child of a <Row> component can only be a <Col> component.');
    }
    if (length > 0) {
        const _children = children;
        return (React__default["default"].createElement(RowContainer, { style: style, className: className }, _children.map((child, index) => {
            console.log(child === null || child === void 0 ? void 0 : child.type);
            if ((child === null || child === void 0 ? void 0 : child.type) !== Col)
                throw new Error('A child of a <Row> component can only be a <Col> component.');
            return React__default["default"].cloneElement(child, { gutter, key: index });
        })));
    }
    else {
        if ((children === null || children === void 0 ? void 0 : children.type) !== Col)
            throw new Error('A child of a <Row> component can only be a <Col> component.');
        return (React__default["default"].createElement(RowContainer, { style: style, className: className }, React__default["default"].cloneElement(children, { gutter })));
    }
};
const RowContainer = styled__default["default"].div `
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

exports.Col = Col;
exports.Row = Row;
//# sourceMappingURL=index.js.map
