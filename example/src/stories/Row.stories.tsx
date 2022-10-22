import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Row from '../components/Row';
import Col from '../components/Col';
export default {
  title: 'Example/Row',
  component: Row,
  argTypes: {
  },
} as ComponentMeta<typeof Row>;

const boxStyle = (color: string) => ({
  display: 'flex',
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  backgroundColor: color,
})
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args) => <Row {...args}>
  <Col span={8}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col span={8}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col span={8}>
    <div style={boxStyle('green')}>3</div>
  </Col>
  <Col span={24}>
    - The gutter props pass an array, and `[10, 10]` sets the padding of the Col component to [top, bottom 10px], [left, right 10px]
  </Col>
</Row>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gutter: [10, 10]
};
