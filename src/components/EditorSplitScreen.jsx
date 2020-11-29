import React from 'react';
import CodeEditor from '../components/CodeEditor';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Lesson = styled.div`
    width: 50%;
`;

const CodeEditor = styled.div`
    position: absolute;
`;

export default ({ children }) => {
  return (
    <Wrapper>
      <Lesson>{children}</Lesson>
      <CodeEditor id="python-demo" display={true} language="python"></CodeEditor>
    </Wrapper>
  );
}