import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type ButtonNotFilledMarkedType = {
  className?: string;
  prop?: string;
  iconbookmark?: string;

  /** Style props */
  buttonNotFilledMarkedPadding?: CSSProperties["padding"];
  divDisplay?: CSSProperties["display"];
  divHeight?: CSSProperties["height"];
};

const Div = styled.div<{
  divDisplay?: CSSProperties["display"];
  divHeight?: CSSProperties["height"];
}>`flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  z-index: 0;
  display: ${(p) => p.divDisplay}
  height: ${(p) => p.divHeight}
`;
const Iconbookmark1 = styled.img`
  width: 14px;
  position: absolute;
  margin: 0 !important;
  top: -4px;
  left: 33px;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const ButtonNotFilledMarkedRoot = styled.div<{
  buttonNotFilledMarkedPadding?: CSSProperties["padding"];
}>`
  width: 40px;
  border-radius: var(--br-7xs);
  background-color: var(--color-chocolate-100);
  border: 1px solid var(--slate-200);
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  position: relative;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
  padding: ${(p) => p.buttonNotFilledMarkedPadding};
`;

const ButtonNotFilledMarked: FunctionComponent<ButtonNotFilledMarkedType> = ({
  className = "",
  buttonNotFilledMarkedPadding,
  prop,
  divDisplay,
  divHeight,
  iconbookmark,
}) => {
  return (
    <ButtonNotFilledMarkedRoot
      buttonNotFilledMarkedPadding={buttonNotFilledMarkedPadding}
      className={className}
    >
      <Div divDisplay={divDisplay} divHeight={divHeight}>
        {prop}
      </Div>
      <Iconbookmark1 alt="" src={iconbookmark} />
    </ButtonNotFilledMarkedRoot>
  );
};

export default ButtonNotFilledMarked;
