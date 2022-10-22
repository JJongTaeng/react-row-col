import React from 'react';
import styled from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const Col = (_a) => {
    var { xxl, xl, lg, md, sm, xs, style, children, span = 24, gutter = [0, 0] } = _a, props = __rest(_a, ["xxl", "xl", "lg", "md", "sm", "xs", "style", "children", "span", "gutter"]);
    return (React.createElement(ColumnContainer, Object.assign({ gutter: gutter, xxl: xxl, xl: xl, lg: lg, md: md, sm: sm, xs: xs, span: span, style: style }, props), children));
};
const ColumnContainer = styled.div `
  padding: ${({ gutter }) => `${gutter[0]}px ${gutter[1]}px`};
  @media (max-width: 576px) {
    & {
      ${({ xs }) => xs === -1 ? 'display: none' : ''};
      width: ${({ xs, span, gutter }) => `calc(${xs ? xs * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
  @media (min-width: 576px) and (max-width: 768px) {
    & {
      ${({ sm }) => sm === -1 ? 'display: none' : ''};
      width: ${({ sm, span, gutter }) => `calc(${sm ? sm * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    & {
      ${({ md }) => md === -1 ? 'display: none' : ''};
      width: ${({ md, span, gutter }) => `calc(${md ? md * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    & {
      ${({ lg }) => lg === -1 ? 'display: none' : ''};
      width: ${({ lg, span, gutter }) => `calc(${lg ? lg * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    & {
      ${({ xl }) => xl === -1 ? 'display: none' : ''};
      width: ${({ xl, span, gutter }) => `calc(${xl ? xl * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
  @media (min-width: 1600px) {
    & {
      ${({ xxl }) => xxl === -1 ? 'display: none' : ''};
      width: ${({ xxl, span, gutter }) => `calc(${xxl ? xxl * 4.166666 : span * 4.166666}% - ${gutter[1] * 2}px`});
    }
  }
`;

const Row = (_a) => {
    var { children, style, gutter = [0, 0], className } = _a, props = __rest(_a, ["children", "style", "gutter", "className"]);
    const length = children === null || children === void 0 ? void 0 : children.length;
    if (typeof children === 'string') {
        console.warn('A child of string type may not behave as intended for a Row component. Please use the Col component.');
        return React.createElement(RowContainer, { style: style, className: className }, children);
    }
    if (length === 0) {
        return React.createElement(RowContainer, { style: style, className: className });
    }
    if (length > 0) {
        return (React.createElement(RowContainer, { style: style, className: className }, children.map((child, index) => {
            if ((child === null || child === void 0 ? void 0 : child.type) !== Col) {
                console.warn('A child of a <Row> component can only be a <Col> component.');
                return child;
            }
            return React.cloneElement(child, { gutter, key: index });
        })));
    }
    else {
        if ((children === null || children === void 0 ? void 0 : children.type) !== Col) {
            console.warn('A child of a <Row> component can only be a <Col> component.');
            return React.createElement(RowContainer, { style: style, className: className }, children);
        }
        return (React.createElement(RowContainer, Object.assign({ style: style, className: className }, props), React.cloneElement(children, { gutter })));
    }
};
const RowContainer = styled.div `
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

export { Col, Row };
//# sourceMappingURL=index.es.js.map
