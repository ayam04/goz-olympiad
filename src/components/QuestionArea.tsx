import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export type QuestionAreaType = {
  className?: string;
};

const LoremIpsumDolor = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  line-height: 45px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--font-size-11xl);
    line-height: 45px;
    text-align: left;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
    line-height: 36px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 27px;
  }
`;
const QuestionTypes = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
    max-width: 100%;
  }
`;
const SingleCorrectOption = styled.h3`
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
    font-family: var(--body-medium);
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
const QuestionTypes1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
`;
const A = styled.h3`
  margin: 0;
  align-self: stretch;
  height: auto;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const OptionLetters = styled.div`
  height: auto;
  width: 35px;
  border-radius: var(--br-81xl);
  background-color: var(--color-navajowhite);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  gap: var(--gap-0);
  &:hover {
    background-color: var(--color-navajowhite);
    display: flex;
    width: 35px;
    align-self: stretch;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-81xl);
  }
`;
const Empty = styled.h2`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: var(--font-size-6xl);
  line-height: 35px;
  font-weight: 400;
  font-family: var(--body-medium);
  color: var(--slate-900);
  text-align: left;
  display: flex;
  min-width: 58;
  max-width: 100%;
  height: auto;
  &:hover {
    font-family: var(--body-medium);
    font-size: var(--font-size-6xl);
    line-height: 35px;
    text-align: left;
    color: var(--slate-900);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 58;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 28px;
  }
`;
const TableItem = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  border: 1px solid var(--slate-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-mini);
  gap: var(--gap-mini);
  max-width: 100%;
  width: auto;
  height: auto;
  &:hover {
    background-color: var(--white);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-mini);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-3xs);
    padding: var(--padding-7xs) var(--padding-mini);
    box-sizing: border-box;
    border: 1px solid var(--slate-200);
    max-width: 100%;
  }
`;
const Options = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-181xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  width: auto;
  height: auto;
  text-align: center;
  font-family: var(--font-montserrat);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-181xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 1225px) {
    padding-right: var(--padding-81xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    padding-right: var(--padding-31xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const MarkForReview = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 30px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-xl);
    line-height: 30px;
    text-align: left;
    color: var(--slate-900);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
`;
const Button3 = styled.div`
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-mediumslateblue);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs) var(--padding-25xl);
  white-space: nowrap;
  max-width: 100%;
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
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-7xs) var(--padding-25xl);
    box-sizing: border-box;
    border: 1px solid var(--color-mediumslateblue);
    white-space: nowrap;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Button4 = styled(Button)`
  height: 46px;
  flex: 1;
  min-width: 235;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-5xs) var(--padding-82xl);
  box-sizing: border-box;
  border: 1px solid var(--color-chocolate-100);
  &:hover {
    display: flex;
    flex: 1;
    height: 46px;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-5xs) var(--padding-82xl);
    box-sizing: border-box;
    border: 1px solid var(--color-chocolate-100);
    min-width: 235;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Button5 = styled(Button)`
  height: 46px;
  flex: 0.3376;
  min-width: 235;
  max-width: 100%;
  background-color: var(--color-lightgreen);
  display: flex;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-5xs) var(--padding-135xl);
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-lightgreen);
    display: flex;
    flex: 0.3376;
    height: 46px;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-5xs) var(--padding-135xl);
    box-sizing: border-box;
    min-width: 235;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
    flex: 1;
  }
`;
const Button6 = styled(Button)`
  height: 46px;
  flex: 0.3121;
  min-width: 235;
  max-width: 100%;
  background-color: var(--color-lightgreen);
  display: flex;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-5xs) var(--padding-137xl);
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-lightgreen);
    display: flex;
    flex: 0.3121;
    height: 46px;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-5xs) var(--padding-137xl);
    box-sizing: border-box;
    min-width: 235;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
    flex: 1;
  }
`;
const ActionButtons = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  width: auto;
  height: auto;
  color: var(--slate-900);
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
    max-width: 100%;
  }
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;
const QuestionAreaRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-6xl);
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
    gap: var(--gap-6xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;

const QuestionArea: FunctionComponent<QuestionAreaType> = ({
  className = "",
}) => {
  return (
    <QuestionAreaRoot className={className}>
      <QuestionTypes>
        <LoremIpsumDolor>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pellentesque vestibulum justo in gravida. Integer pretium dolor nisi,
          in lobortis?
        </LoremIpsumDolor>
      </QuestionTypes>
      <QuestionTypes1>
        <SingleCorrectOption>Single Correct Option</SingleCorrectOption>
      </QuestionTypes1>
      <Options>
        <TableItem>
          <OptionLetters>
            <A>A</A>
          </OptionLetters>
          <Empty>Empty</Empty>
        </TableItem>
        <TableItem>
          <OptionLetters>
            <A>A</A>
          </OptionLetters>
          <Empty>Empty</Empty>
        </TableItem>
        <TableItem>
          <OptionLetters>
            <A>A</A>
          </OptionLetters>
          <Empty>Empty</Empty>
        </TableItem>
        <TableItem>
          <OptionLetters>
            <A>A</A>
          </OptionLetters>
          <Empty>Empty</Empty>
        </TableItem>
      </Options>
      <ActionButtons>
        <Button3>
          <MarkForReview>Mark For Review and Next</MarkForReview>
        </Button3>
        <Button4
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#0f172a",
            fontSize: "20",
            borderColor: "#fb923c",
            borderRadius: "6px",
            "&:hover": { borderColor: "#fb923c" },
            height: 46,
          }}
        >
          Clear Response
        </Button4>
        <Button5
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#0f172a",
            fontSize: "20",
            background: "#86efac",
            borderRadius: "6px",
            "&:hover": { background: "#86efac" },
            height: 46,
          }}
        >
          Back
        </Button5>
        <Button6
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#0f172a",
            fontSize: "20",
            background: "#86efac",
            borderRadius: "6px",
            "&:hover": { background: "#86efac" },
            height: 46,
          }}
        >
          Next
        </Button6>
      </ActionButtons>
    </QuestionAreaRoot>
  );
};

export default QuestionArea;
