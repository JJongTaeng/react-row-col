import React from 'react';
import { Row, Col } from 'react-row-col';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Row gutter={[10, 10]}>
        <Col span={8}>
          <BorderBox backgroundColor={'red'}>
            Hello
          </BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox backgroundColor={'blue'}>
            Hello
          </BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox backgroundColor={'green'}>
            Hello
          </BorderBox>
        </Col>
        <Col {...{xxl: 24, xl: 8, lg: 8, md: 24, sm: 12, xs: 24}}>
          <BorderBox backgroundColor={'red'}>
            Hello
          </BorderBox>
        </Col>
        <Col {...{xxl: 24, xl: 8, lg: 8, md: 24, sm: 12, xs: 24}}>
          <BorderBox backgroundColor={'blue'}>
            Hello
          </BorderBox>
        </Col>
        <Col {...{xxl: 24, xl: 8, lg: 8, md: 24, sm: 12, xs: 24}}>
          <BorderBox backgroundColor={'green'}>
            Hello
          </BorderBox>
        </Col>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Row>
                <Col {...{xxl: 24, xl: 24, lg: 12, md: 12, sm: 12, xs: 24}}>
                  <BorderBox backgroundColor={'blue'}>
                    Hello
                  </BorderBox>
                </Col>
                <Col {...{xxl: 24, xl: 24, lg: 12, md: 12, sm: 12, xs: 24}}>
                  <BorderBox backgroundColor={'red'}>
                    Hello
                  </BorderBox>
                </Col>
                <Col {...{xxl: 24, xl: 24, lg: 12, md: 12, sm: 12, xs: 24}}>
                  <BorderBox backgroundColor={'blue'}>
                    Hello
                  </BorderBox>
                </Col>
                <Col {...{xxl: 24, xl: 24, lg: 12, md: 12, sm: 12, xs: 24}}>
                  <BorderBox backgroundColor={'red'}>
                    Hello
                  </BorderBox>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <BorderBox backgroundColor={'green'} height={400}>
                Hello
              </BorderBox>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const BorderBox = styled.div<{backgroundColor: string, height?: number}>`
  border: 1px solid #333; 
  height: ${({ height }) => height ? height : 200}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`

export default App;
