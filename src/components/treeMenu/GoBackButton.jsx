import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";

const GoBackButtonStyled = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  a {
    color: black;
  }

  &:hover {
    svg {
      path {
        fill: #838490;
      }
    }

    a {
      color: #838490;
      text-decoration: none;
    }
  }
`;

export default function GoBackButton() {
  return (
    <GoBackButtonStyled>
      <IoIosArrowBack style={{ fontSize: "2rem" }} />
      <Link to="/treemenu">Go Back to Tree</Link>
    </GoBackButtonStyled>
  );
}
