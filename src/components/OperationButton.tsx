import { FunctionComponent } from "react";
import OperationButton1 from "./OperationButton1";
import styled from "styled-components";

export type OperationButtonType = {
  className?: string;
  prop?: string;
};

const OperationButtonRoot = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
    display: flex;
    width: 50px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const OperationButton: FunctionComponent<OperationButtonType> = ({
  className = "",
  prop,
}) => {
  return (
    <OperationButtonRoot className={className}>
      <OperationButton1 prop={prop} />
    </OperationButtonRoot>
  );
};

export default OperationButton;
