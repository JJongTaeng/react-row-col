import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Row from '../components/Row';
import Col from '../components/Col';

export default {
  title: 'Example/Col',
  component: Col,
  argTypes: {},
} as ComponentMeta<typeof Col>;

const boxStyle = (color: string) => ({
  display: 'flex',
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  backgroundColor: color,
})
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Col> = (args) => <Row gutter={args.gutter}>
  <Col span={args.span}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col span={args.span}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col span={args.span}>
    <div style={boxStyle('green')}>3</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('green')}>3</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('green')}>3</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('green')}>3</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('dodgerblue')}>1</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('red')}>2</div>
  </Col>
  <Col {...{ xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24, }} {...args}>
    <div style={boxStyle('green')}>3</div>
  </Col>
</Row>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gutter: [10, 10],
  xxl: 2, xl: 4, lg: 6, md: 8, sm: 12, xs: 24,
  span: 8,
};
