import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import Submit from "./Submit";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";
import Button1 from "./Button1";
import ButtonFilled from "./ButtonFilled";
import ButtonNotFilledMarked from "./ButtonNotFilledMarked";
import ButtonNotVisited from "./ButtonNotVisited";
import ButtonFilledMarked from "./ButtonFilledMarked";

export type SummaryType = {
  className?: string;
};

const TestSummary = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 16px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-11xl);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
    line-height: 13px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 10px;
  }
`;
const SummaryAndProgress = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-11xl);
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-11xl);
    box-sizing: border-box;
  }
`;
const Progress = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 16px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-11xl);
    line-height: 16px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const SummaryAndProgress1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  background-color: var(--color-aquamarine);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-3xs);
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-aquamarine);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-xl) var(--padding-3xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const AnsweredIcon = styled.b`
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
const AnsweredTypes = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 81;
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
    min-width: 81;
  }
`;
const UnansweredIcon = styled.b`
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
const UnansweredTypes = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 81;
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
    min-width: 81;
  }
`;
const AnsweredTypesParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-smi);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  width: auto;
  height: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-smi);
    box-sizing: border-box;
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
  gap: var(--gap-xl);
  min-width: 81;
  height: auto;
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    min-width: 81;
  }
`;
const Group = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  min-width: 81;
  height: auto;
  color: var(--color-chocolate-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    min-width: 81;
  }
`;
const ProgressDetails = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  width: auto;
  height: auto;
  font-size: var(--font-size-29xl);
  color: var(--color-deepskyblue);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const NavigationButtons = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-4xl);
  box-sizing: border-box;
  gap: var(--gap-6xs);
  min-height: 410;
  width: auto;
  height: auto;
  font-size: var(--body-medium-size);
  font-family: var(--body-medium);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-6xs);
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-4xl);
    box-sizing: border-box;
    min-height: 410;
  }
`;
const SummaryChild = styled.div`
  align-self: stretch;
  height: 1px;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  width: auto;
  flex-direction: column;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-29xl);
  box-sizing: border-box;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 1px;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs) var(--padding-29xl);
    box-sizing: border-box;
  }
`;
const Submission1 = styled(Button)`
  width: 190px;
  height: 55px;
  background-color: var(--color-chocolate-100);
  display: flex;
  flex-direction: column;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--br-3xs);
  padding: var(--padding-3xs) var(--padding-29xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-chocolate-100);
    display: flex;
    width: 190px;
    height: 55px;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs) var(--padding-29xl);
    box-sizing: border-box;
  }
`;
const SummaryRoot = styled.div`
  width: 306px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-11xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  height: auto;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    width: 306px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-3xs) var(--padding-11xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1225px) {
    display: none;
  }
`;

const Summary: FunctionComponent<SummaryType> = ({ className = "" }) => {
  const [isSubmitOpen, setSubmitOpen] = useState(false);

  const openSubmit = useCallback(() => {
    setSubmitOpen(true);
  }, []);

  const closeSubmit = useCallback(() => {
    setSubmitOpen(false);
  }, []);

  return (
    <>
      <SummaryRoot className={className}>
        <SummaryAndProgress>
          <TestSummary>Test Summary</TestSummary>
        </SummaryAndProgress>
        <SummaryAndProgress1>
          <Progress>Progress: 96%</Progress>
        </SummaryAndProgress1>
        <ProgressDetails>
          <AnsweredTypesParent>
            <AnsweredTypes>
              <AnsweredIcon>5</AnsweredIcon>
              <Answered>Answered</Answered>
            </AnsweredTypes>
            <UnansweredTypes>
              <UnansweredIcon>5</UnansweredIcon>
              <Answered>Unanswered</Answered>
            </UnansweredTypes>
          </AnsweredTypesParent>
          <AnsweredTypesParent>
            <Parent>
              <AnsweredIcon>5</AnsweredIcon>
              <Answered>Answered and left for review</Answered>
            </Parent>
            <Group>
              <UnansweredIcon>5</UnansweredIcon>
              <Answered>Unanswered and left for review</Answered>
            </Group>
          </AnsweredTypesParent>
        </ProgressDetails>
        <NavigationButtons>
          <Button1 bookmarks="1" />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="2"
          />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="3"
          />
          <ButtonFilled prop="4" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="5" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="6" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="7" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="8" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="9" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="10" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="11" divAlignSelf="unset" divDisplay="flex" />
          <ButtonFilled prop="12" divAlignSelf="unset" divDisplay="flex" />
          <Button1
            propWidth="48px"
            propBorder="4px solid #4ade80"
            propHeight="48px"
            bookmarks="13"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="14"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="15"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="16"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="17"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="18"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonNotFilledMarked
            buttonNotFilledMarkedPadding="0px 0px 8px 8px"
            prop="19"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="20"
          />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="21"
          />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="22"
          />
          <ButtonNotVisited prop="23" divAlignSelf="unset" divDisplay="flex" />
          <ButtonNotVisited prop="24" divAlignSelf="unset" divDisplay="flex" />
          <ButtonNotVisited prop="25" divAlignSelf="unset" divDisplay="flex" />
          <ButtonNotVisited prop="26" divAlignSelf="unset" divDisplay="flex" />
          <ButtonNotVisited prop="27" divAlignSelf="unset" divDisplay="flex" />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="28"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="29"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="30"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="31"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="32"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="33"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="34"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="35"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="36"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="37"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="38"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <ButtonFilledMarked
            buttonFilledMarkedPadding="0px 0px 8px 8px"
            prop="39"
            divDisplay="flex"
            divHeight="auto"
            iconbookmark="/iconbookmark.svg"
          />
          <Button1
            propWidth="40px"
            propBorder="1px solid #e2e8f0"
            propHeight="auto"
            bookmarks="40"
          />
        </NavigationButtons>
        <SummaryChild />
        <Submission1
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "25",
            background: "#fb923c",
            borderRadius: "10px",
            "&:hover": { background: "#fb923c" },
            width: 190,
            height: 55,
          }}
          onClick={openSubmit}
        >
          Submit
        </Submission1>
      </SummaryRoot>
      {isSubmitOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSubmit}
        >
          <Submit onClose={closeSubmit} />
        </PortalPopup>
      )}
    </>
  );
};

export default Summary;
