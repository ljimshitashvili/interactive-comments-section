import { useState } from "react";
import Comment from "./components/Comment";
import styled from "styled-components";

function App() {
  return (
    <Body>
      <Comment />
    </Body>
  );
}

export default App;

const Body = styled.main`
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
