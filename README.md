# Download
```plain
npm i react-row-col
```

# Usage
1. Row
   - The Row component wraps the Col component and has gutter props.
   - The gutter props pass an array, and [10, 20] sets the padding of the Col component to top, bottom 10px, left, right 20px.

2. Col

   | props |      width      | description | type |
   |:---------------:|:-----:|:-----------:|:----:|
   | `span`  |    all width    | Raster number of cells to occupy, 0 | number |
   | `xs`    | screen < 576px  | could be a span value | number |
   | `xs`    | screen < 576px  | could be a span value | number |
   | `sm`    | screen ≥ 576px  | could be a span value | number |
   | `md`    | screen ≥ 768px  | could be a span value | number |
   | `lg`    | screen ≥ 992px  | could be a span value | number |
   | `xl`    | screen ≥ 1200px | could be a span value | number |
   | `xxl`   | screen ≥ 1600px | could be a span value | number |

   - `span` props are ignored if props from `xs` to `xxl` are present.
   - span value `-1` is "display: none"
