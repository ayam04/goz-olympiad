import { FunctionComponent } from "react";
import styled from "styled-components";

export type H50MType = {
  className?: string;
  testTime?: string;
};

const H50mRoot = styled.b`
  height: 61px;
  flex: 1;
  position: relative;
  font-size: var(--font-size-11xl);
  line-height: 16px;
  display: flex;
  font-family: var(--font-montserrat);
  color: var(--color-black);
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &:hover {
    font-weight: 700;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-11xl);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: 61px;
  }
`;

const H50M: FunctionComponent<H50MType> = ({
  className = "",
  testTime = "1H 50M",
}) => {
  return <H50mRoot className={className}>{testTime}</H50mRoot>;
};

export default H50M;
