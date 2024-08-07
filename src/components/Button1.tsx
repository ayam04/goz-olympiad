import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type Button1Type = {
  className?: string;
  bookmarks?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
  propHeight?: CSSProperties["height"];
};

const Bookmarks = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const ButtonRoot = styled.div<{
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
  propHeight?: CSSProperties["height"];
}>`width: 40px;
  border-radius: var(--br-7xs);
  background-color: var(--white);
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
  background-color: var(--white);
  display: flex;
  width: 40px;
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
  }
  width: ${(p) => p.propWidth}
  border: ${(p) => p.propBorder}
  height: ${(p) => p.propHeight}
`;

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  propWidth,
  propBorder,
  propHeight,
  bookmarks,
}) => {
  return (
    <ButtonRoot
      propWidth={propWidth}
      propBorder={propBorder}
      propHeight={propHeight}
      className={className}
    >
      <Bookmarks>{bookmarks}</Bookmarks>
    </ButtonRoot>
  );
};

export default Button1;
