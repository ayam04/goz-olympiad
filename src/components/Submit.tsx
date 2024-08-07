import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";

export type SubmitType = {
  className?: string;
  onClose?: () => void;
};

const Wait = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 60px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-21xl);
    line-height: 60px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-13xl);
    line-height: 48px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 36px;
  }
`;
const Submission1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  background-color: var(--color-lightcoral);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-lightcoral);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-8xs) 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const AreYouSure = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 40px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-11xl);
    line-height: 40px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 24px;
  }
`;
const Submission2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  font-size: var(--font-size-11xl);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-8xs) 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const OnceYouPress = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: left;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const Submission3 = styled.section`
  align-self: stretch;
  border-radius: var(--br-mini);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-8xs) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const B = styled.b`
  align-self: stretch;
  height: auto;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-29xl);
    line-height: 16px;
    text-align: center;
    color: var(--color-deepskyblue);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-19xl);
    line-height: 13px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
    line-height: 10px;
  }
`;
const Answered = styled.div`
  align-self: stretch;
  height: auto;
  position: relative;
  font-size: var(--body-medium-size);
  line-height: 16px;
  font-weight: 600;
  color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--body-medium-size);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
`;
const Parent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 141;
  height: auto;
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    min-width: 141;
  }
`;
const AnswerStatusChild = styled.div`
  height: 85px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  border: 1px solid var(--color-gray-400);
  &:hover {
    display: flex;
    width: 1px;
    height: 85px;
    border: 1px solid var(--color-gray-400);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 1px;
  }
`;
const AnsweredAndLeft = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-medium-size);
  line-height: 16px;
  font-weight: 600;
  color: var(--color-black);
  display: flex;
  max-height: 27;
  width: auto;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--body-medium-size);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    max-height: 27;
  }
`;
const B1 = styled.b`
  align-self: stretch;
  height: auto;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-29xl);
    line-height: 16px;
    text-align: center;
    color: var(--color-chocolate-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-19xl);
    line-height: 13px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
    line-height: 10px;
  }
`;
const Container = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 141;
  height: auto;
  color: var(--color-chocolate-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    min-width: 141;
  }
`;
const UnansweredAndLeft = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-medium-size);
  line-height: 16px;
  font-weight: 600;
  color: var(--color-black);
  display: flex;
  width: auto;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--body-medium-size);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-8xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 141;
  height: auto;
  color: var(--color-chocolate-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-3xs) var(--padding-8xs);
    box-sizing: border-box;
    min-width: 141;
  }
`;
const AnswerStatus = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-mid) var(--padding-3xs)
    var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  width: auto;
  height: auto;
  text-align: center;
  font-size: var(--font-size-29xl);
  color: var(--color-deepskyblue);
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-8xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-mid) var(--padding-3xs)
      var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const OnceYouAre = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: left;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const Submission4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-xl);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-8xs) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Confirm = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-6xl);
  line-height: 35px;
  font-weight: 600;
  font-family: var(--font-montserrat);
  color: var(--color-black);
  text-align: center;
  display: flex;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-6xl);
    line-height: 35px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 28px;
  }
`;
const ConfirmButtons = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-crimson-200);
  width: 163px;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: #ff5b5b;
    display: flex;
    width: 163px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: center;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  &:active {
    background-color: var(--color-crimson-200);
  }
`;
const GoBack = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-6xl);
  line-height: 35px;
  font-weight: 600;
  font-family: var(--font-montserrat);
  color: var(--color-black);
  text-align: center;
  display: flex;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-6xl);
    line-height: 35px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const ConfirmButtons1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-limegreen);
  width: 163px;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: #74ff79;
    display: flex;
    width: 163px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: center;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-limegreen);
  }
`;
const Confirmation = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  width: auto;
  height: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SubmitRoot = styled.div`
  width: 960px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-mini);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
  font-family: var(--font-montserrat);
  &:hover {
    background-color: var(--color-whitesmoke-200);
    display: flex;
    width: 960px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-mini);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Submit: FunctionComponent<SubmitType> = ({ className = "", onClose }) => {
  const onConfirmButtonsClick = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  return (
    <SubmitRoot className={className}>
      <Submission1>
        <Wait>Wait!</Wait>
      </Submission1>
      <Submission2>
        <AreYouSure>Are you Sure?</AreYouSure>
      </Submission2>
      <Submission3>
        <OnceYouPress>
          Once you press submit no more changes can be made to your selected
          answers. Please make sure that you do not have any pending questions
          you want to retry/review. Here is the preview of current state of your
          exam
        </OnceYouPress>
      </Submission3>
      <AnswerStatus>
        <Parent>
          <B>5</B>
          <Answered>Answered</Answered>
        </Parent>
        <AnswerStatusChild />
        <Parent>
          <B>5</B>
          <AnsweredAndLeft>Answered and left for review</AnsweredAndLeft>
        </Parent>
        <AnswerStatusChild />
        <Container>
          <B1>5</B1>
          <Answered>Unanswered</Answered>
        </Container>
        <AnswerStatusChild />
        <FrameDiv>
          <B1>5</B1>
          <UnansweredAndLeft>Unanswered and left for review</UnansweredAndLeft>
        </FrameDiv>
      </AnswerStatus>
      <Submission4>
        <OnceYouAre>
          Once you are sure that you want to submit, press the Confirm button
          below. No further changes will be entertained
        </OnceYouAre>
      </Submission4>
      <Confirmation>
        <ConfirmButtons onClick={onConfirmButtonsClick}>
          <Confirm>Confirm</Confirm>
        </ConfirmButtons>
        <ConfirmButtons1>
          <GoBack>Go Back</GoBack>
        </ConfirmButtons1>
      </Confirmation>
    </SubmitRoot>
  );
};

export default Submit;
