import { FunctionComponent } from "react";
import Menubar2 from "./Menubar2";
import styled from "styled-components";
import QuestionArea from "./QuestionArea";

export type MenuBar1Type = {
  className?: string;
};

const QuestionNo = styled.h3`
  margin: 0;
  height: 56px;
  width: 207px;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  &:hover {
    font-weight: 500;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: 207px;
    height: 56px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const CorrectMarks = styled.span``;
const Span = styled.span`
  color: var(--color-mediumseagreen);
`;
const CorrectMarksContainer = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  min-width: 378;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: center;
    display: flex;
    flex: 1;
    height: auto;
    min-width: 378;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const Span1 = styled.span`
  color: var(--color-crimson-100);
`;
const MarksInfo = styled.div`
  width: 1193px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-10xl);
  max-width: 100%;
  height: auto;
  &:hover {
    display: flex;
    width: 1193px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-10xl);
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const QuestionInfo = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-black);
  border-bottom: 1px solid var(--color-black);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  width: auto;
  height: auto;
  text-align: center;
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
  }
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;
const MenuBarRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  width: auto;
  height: auto;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
`;

const MenuBar1: FunctionComponent<MenuBar1Type> = ({ className = "" }) => {
  return (
    <MenuBarRoot className={className}>
      <Menubar2 />
      <QuestionInfo>
        <QuestionNo>Question No. 13</QuestionNo>
        <MarksInfo>
          <CorrectMarksContainer>
            <CorrectMarks>{`Correct Marks : `}</CorrectMarks>
            <Span>1</Span>
          </CorrectMarksContainer>
          <CorrectMarksContainer>
            <CorrectMarks>{`Negative Marks : `}</CorrectMarks>
            <Span1>1</Span1>
          </CorrectMarksContainer>
        </MarksInfo>
      </QuestionInfo>
      <QuestionArea />
    </MenuBarRoot>
  );
};

export default MenuBar1;
