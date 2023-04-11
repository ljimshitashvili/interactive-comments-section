import { useState } from "react";
import styled from "styled-component";

function Comment() {
  return <CommContainer />;
}

export default Comment;

const CommContainer = styled.div`
  width: 100%;
  max-width: 327px;
  height: 327px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid black;
`;
