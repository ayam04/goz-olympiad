import { FunctionComponent } from "react";
import styled from "styled-components";

export type InstructionsModalType = {
  className?: string;
  onClose?: () => void;
};

const Instructions = styled.b`
  line-height: 60px;
`;
const Instructions1 = styled.p`
  margin: 0;
  font-size: var(--font-size-21xl);
`;
const YouHaveA = styled.span`
  font-weight: 500;
`;
const BlankLine = styled.span`
  line-height: 24px;
`;
const BlankLine1 = styled.p`
  margin: 0;
`;
const TimeLimit = styled.span`
  font-weight: 600;
  font-family: var(--font-montserrat);
`;
const ScratchPaperIfAllowed = styled.li`
  margin-bottom: 0px;
`;
const TimeLimitYouHaveATotalO = styled.ol`
  margin: 0;
  padding-left: var(--padding-8xl);
`;
const CheatingAndAcademic = styled.span`
  font-weight: 600;
`;
const TimeLimitYouHaveATotalO1 = styled.ul`
  margin: 0;
  padding-left: var(--padding-8xl);
`;
const InstructionsTimeLimitContainer = styled.section`
  height: 803.1px;
  flex: 1;
  position: relative;
  color: var(--color-black);
  text-align: left;
  display: flex;
  max-width: 100%;
  font-size: var(--font-size-xl);
  font-family: var(--font-montserrat);
  &:hover {
    text-align: left;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: 803.1px;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const InstructionsModalRoot = styled.div`
  width: 1595.7px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-whitesmoke-200);
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-3xs);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-whitesmoke-200);
    display: flex;
    width: 1595.7px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-3xs);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: normal;
    letter-spacing: normal;
  }
`;

const InstructionsModal: FunctionComponent<InstructionsModalType> = ({
  className = "",
  onClose,
}) => {
  return (
    <InstructionsModalRoot className={className}>
      <InstructionsTimeLimitContainer>
        <Instructions1>
          <Instructions>Instructions:-</Instructions>
        </Instructions1>
        <BlankLine1>
          <BlankLine>
            <YouHaveA>&nbsp;</YouHaveA>
          </BlankLine>
        </BlankLine1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <TimeLimit>Time Limit:</TimeLimit>
              <YouHaveA>
                {" "}
                You have a total of 3 hours to complete the exam. Ensure that
                you manage your time effectively to answer all questions within
                the allocated time frame.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <BlankLine1>
          <BlankLine>
            <YouHaveA>&nbsp;</YouHaveA>
          </BlankLine>
        </BlankLine1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Materials Needed:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>Writing utensils (pen or pencil)</YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>Scratch paper (if allowed)</YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Any permitted resources or materials specified in the exam
                instructions 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Technical Requirements:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Ensure a stable internet connection throughout the duration of
                the exam.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Use a compatible device with a reliable web browser that
                supports the exam platform.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Close all unnecessary tabs or applications to minimize
                distractions and optimize performance.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Adjust your screen brightness and resolution for optimal
                visibility. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Exam Environment:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Choose a quiet and well-lit room for taking the exam.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Clear your workspace of any unauthorized materials or items not
                permitted for the exam.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Maintain a tidy and organized area to facilitate focus and
                concentration. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Identification:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Have a valid form of identification ready for verification
                purposes, as instructed by your proctor.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Follow any additional identification procedures specified by
                your institution or exam provider. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Exam Instructions:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Read each question carefully and thoroughly before answering.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Pay attention to any specific instructions provided with each
                question.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Ensure that you understand the format of each question type
                (e.g., multiple-choice, essay, short answer) before responding.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Double-check your answers for accuracy and completeness before
                submitting. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Communication:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Avoid communicating with other individuals during the exam
                unless permitted by the proctor.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Refrain from using any unauthorized communication devices,
                including cell phones or messaging applications. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Proctoring Assistance:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Contact your designated proctor immediately if you encounter any
                technical issues or require clarification on exam instructions.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Follow proctoring guidelines and instructions provided
                throughout the exam session. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <TimeLimit>Submission</TimeLimit>
              <YouHaveA>:</YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Submit your completed exam within the designated time limit.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Ensure that all responses are saved and submitted before the
                exam deadline.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Follow the specified submission process as instructed by your
                proctor or exam platform. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Conclusion:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Once you have completed the exam, await further instructions
                from your proctor regarding next steps or any post-exam
                procedures. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>
                Cheating and Academic Integrity:
              </CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Remember to uphold the principles of academic integrity
                throughout the exam.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                Any attempt to cheat or engage in dishonest behavior will result
                in consequences as outlined by your institution or exam
                provider. 
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
        <TimeLimitYouHaveATotalO>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <CheatingAndAcademic>Good Luck!:</CheatingAndAcademic>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO>
        <TimeLimitYouHaveATotalO1>
          <ScratchPaperIfAllowed>
            <BlankLine>
              <YouHaveA>
                We wish you the best of luck on your exam. Stay focused, remain
                calm, and do your best.
              </YouHaveA>
            </BlankLine>
          </ScratchPaperIfAllowed>
        </TimeLimitYouHaveATotalO1>
      </InstructionsTimeLimitContainer>
    </InstructionsModalRoot>
  );
};

export default InstructionsModal;
