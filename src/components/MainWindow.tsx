import { FunctionComponent } from "react";
import styled from "styled-components";
import H50M from "./H50M";
import CandidateInfo from "./CandidateInfo";

export type MainWindowType = {
  className?: string;
};

const Logo1Icon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  display: flex;
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    flex: 1;
  }
`;
const Branding = styled.div`
  height: 140px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 160px;
    height: 140px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-3xs) var(--padding-3xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const GlobalOlympiads = styled.h1`
  margin: 0;
  align-self: stretch;
  height: 130px;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-raleway);
    font-size: var(--font-size-29xl);
    letter-spacing: -0.01em;
    line-height: 48px;
    text-align: center;
    color: var(--slate-900);
    display: flex;
    align-self: stretch;
    width: auto;
    height: 130px;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-19xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
    line-height: 29px;
  }
`;
const OlympiadTitle = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 420px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-3xs) var(--padding-3xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const HMName = styled.div`
  width: 253px;
  border-radius: var(--br-mini) var(--br-mini) 0px 0px;
  background-color: var(--color-chocolate-100);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px;
  box-sizing: border-box;
  white-space: nowrap;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-chocolate-100);
    display: flex;
    width: 253px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini) var(--br-mini) 0px 0px;
    padding: var(--padding-9xs) 0px;
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const HMNameWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-58xl) var(--padding-212xl) var(--padding-9xs);
  box-sizing: border-box;
  min-width: 253;
  max-width: 100%;
  height: auto;
  gap: var(--gap-3xs);
  z-index: 1;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-58xl) var(--padding-212xl) var(--padding-9xs);
    box-sizing: border-box;
    min-width: 253;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    padding-left: var(--padding-96xl);
    padding-right: var(--padding-96xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const MainWindowRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-29xl);
  color: var(--slate-900);
  font-family: var(--font-raleway);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;

const MainWindow: FunctionComponent<MainWindowType> = ({ className = "" }) => {
  return (
    <MainWindowRoot className={className}>
      <Branding>
        <Logo1Icon loading="lazy" alt="" src="/logo-1@2x.png" />
      </Branding>
      <OlympiadTitle>
        <GlobalOlympiads>Global Olympiads</GlobalOlympiads>
      </OlympiadTitle>
      <HMNameWrapper>
        <HMName>
          <H50M />
        </HMName>
      </HMNameWrapper>
      <CandidateInfo
        candidateName="Candidate Name: Rohan Goyal"
        subjectName="Subject Name: French"
      />
    </MainWindowRoot>
  );
};

export default MainWindow;
