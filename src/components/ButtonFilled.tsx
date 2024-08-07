import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type ButtonFilledType = {
  className?: string;
  prop?: string;

  /** Style props */
  divAlignSelf?: CSSProperties["alignSelf"];
  divDisplay?: CSSProperties["display"];
};

const Div = styled.div<{
  divAlignSelf?: CSSProperties["alignSelf"];
  divDisplay?: CSSProperties["display"];
}>`align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${(p) => p.divAlignSelf}
  display: ${(p) => p.divDisplay}
`;
const ButtonFilledRoot = styled.div`
  width: 40px;
  border-radius: var(--br-7xs);
  background-color: var(--color-lightskyblue);
  border: 1px solid var(--slate-200);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
`;

const ButtonFilled: FunctionComponent<ButtonFilledType> = ({
  className = "",
  prop,
  divAlignSelf,
  divDisplay,
}) => {
  return (
    <ButtonFilledRoot className={className}>
      <Div divAlignSelf={divAlignSelf} divDisplay={divDisplay}>
        {prop}
      </Div>
    </ButtonFilledRoot>
  );
};

export default ButtonFilled;
