import { useState } from "react";
import styled from "styled-components";
import amyRobsonImg from "/public/avatars/image-amyrobson.png";

function Comment() {
  return (
    <CommContainer>
      <div className="userInfoContainer">
        <img src={amyRobsonImg} alt="User avatar" />
        <h1>amyrobson</h1>
        <h2>1 month ago</h2>
      </div>
      <p>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You’ve nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
    </CommContainer>
  );
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
