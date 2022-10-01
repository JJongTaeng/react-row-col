import React from 'react';
import { Row, Col } from 'react-row-col';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8}>
          <BorderBox backgroundColor={'red'}>
            Hello
          </BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox backgroundColor={'blue'}>
            Hello2
          </BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox backgroundColor={'green'}>
            Hello3
          </BorderBox>
        </Col>
      </Row>
    </div>
  );
}

const BorderBox = styled.div<{backgroundColor: string}>`
  border: 1px solid #333; 
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`

export default App;
