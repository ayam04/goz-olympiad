import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type CandidateInfoType = {
  className?: string;
  candidateName?: string;
  subjectName?: string;

  /** Style props */
  candidatePhotoBackgroundImage?: CSSProperties["backgroundImage"];
};

const CandidatePhotoIcon = styled.img<{
  candidatePhotoBackgroundImage?: CSSProperties["backgroundImage"];
}>`
  align-self: stretch;
  width: 130px;
  position: relative;
  background-color: var(--color-gainsboro-200);
  display: flex;
  height: auto;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 130px;
    align-self: stretch;
    height: auto;
  }
  background-image: ${(p) => p.candidatePhotoBackgroundImage};
`;
const CandidateNameRohan = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 36px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  width: auto;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-raleway);
    font-size: var(--font-size-6xl);
    letter-spacing: -0.01em;
    line-height: 36px;
    text-align: left;
    color: var(--slate-900);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 29px;
  }
`;
const SubjectNameFrench = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 36px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-raleway);
    font-size: var(--font-size-6xl);
    letter-spacing: -0.01em;
    line-height: 36px;
    text-align: left;
    color: var(--slate-900);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 29px;
  }
`;
const Re = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 36px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  min-width: 31;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 600;
    font-family: var(--font-raleway);
    font-size: var(--font-size-6xl);
    letter-spacing: -0.01em;
    line-height: 36px;
    text-align: left;
    color: var(--slate-900);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 31;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 29px;
  }
`;
const CandidateDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-8xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 850px) {
    flex: unset;
    align-self: stretch;
  }
`;
const CandidateInfoRoot = styled.div`
  height: 150px;
  width: 418px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--slate-900);
  font-family: var(--font-raleway);
  &:hover {
    display: flex;
    width: 418px;
    height: 150px;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: var(--gap-7xs);
  }
`;

const CandidateInfo: FunctionComponent<CandidateInfoType> = ({
  className = "",
  candidateName,
  subjectName,
  candidatePhotoBackgroundImage,
}) => {
  return (
    <CandidateInfoRoot className={className}>
      <CandidatePhotoIcon
        candidatePhotoBackgroundImage={candidatePhotoBackgroundImage}
      />
      <CandidateDetails>
        <CandidateNameRohan>{candidateName}</CandidateNameRohan>
        <SubjectNameFrench>{subjectName}</SubjectNameFrench>
        <Re>Re</Re>
      </CandidateDetails>
    </CandidateInfoRoot>
  );
};

export default CandidateInfo;
