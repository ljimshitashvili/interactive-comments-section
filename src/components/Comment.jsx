import { useState } from "react";
import styled from "styled-components";
import amyRobsonImg from "/public/avatars/image-amyrobson.png";

function Comment() {
  return (
    <CommContainer>
      <div>
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
      </div>
      <div className="activities">
        <div className="vote">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <h3>12</h3>
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>
        <div className="reply">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <h4>Reply</h4>
        </div>
      </div>
    </CommContainer>
  );
}

export default Comment;

const CommContainer = styled.div`
  width: 100%;
  max-width: 327px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    max-width: 730px;
    display: block;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .userInfoContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }

    h1 {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #334253;
    }

    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #67727e;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727e;
  }

  .activities {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .vote {
    background: #f5f6fa;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #5357b6;
    }
  }

  .reply {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #5357b6;
    }
  }
`;
