import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type OperationButton1Type = {
  className?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Div = styled.div`
  height: 34px;
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: 34px;
  }
`;
const OperationButtonRoot = styled.div<{
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
}>`flex: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-7xs);
  background-color: var(--color-chocolate-200);
  border: 1px solid var(--slate-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs) var(--padding-6xs);
  height: auto;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
  background-color: var(--color-chocolate-200);
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-5xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-7xs) var(--padding-6xs);
  box-sizing: border-box;
  border: 1px solid var(--slate-200);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  width: ${(p) => p.propWidth}
  background-color: ${(p) => p.propBackgroundColor}
`;

const OperationButton1: FunctionComponent<OperationButton1Type> = ({
  className = "",
  propWidth,
  propBackgroundColor,
  prop,
}) => {
  return (
    <OperationButtonRoot
      propWidth={propWidth}
      propBackgroundColor={propBackgroundColor}
      className={className}
    >
      <Div>{prop}</Div>
    </OperationButtonRoot>
  );
};

export default OperationButton1;
