import { FunctionComponent } from "react";
import styled from "styled-components";
import OperationButton1 from "./OperationButton1";
import OperationButton from "./OperationButton";
import CalculatorButton from "./CalculatorButton";

export type CalculatorType = {
  className?: string;
  onClose?: () => void;
};

const A = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  line-height: 40px;
  font-weight: 500;
  color: inherit;
  display: flex;
  mix-blend-mode: normal;
  max-width: 100%;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--font-montserrat);
    font-size: var(--font-size-11xl);
    line-height: 40px;
    text-align: right;
    mix-blend-mode: normal;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
`;
const Wrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-mini);
  background-color: var(--color-gainsboro-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-gainsboro-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Div = styled.div`
  height: 34px;
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    flex: 1;
    height: 34px;
  }
`;
const CalculatorButton1 = styled.div`
  width: 170px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
  &:hover {
    background-color: var(--white);
    display: flex;
    width: 170px;
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
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;
const CalculatorGrid = styled.div`
  height: 250px;
  width: 280px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-7xs);
  &:hover {
    display: flex;
    width: 280px;
    height: 250px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-7xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
`;
const OperationGrid = styled.div`
  height: 250px;
  width: 70px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  &:hover {
    display: flex;
    width: 70px;
    height: 250px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
`;
const CalculatorButton2 = styled.div`
  flex: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
  min-width: 142;
  height: auto;
  gap: var(--gap-5xs);
  &:hover {
    background-color: var(--white);
    display: flex;
    flex: 1;
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
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    min-width: 142;
  }
`;
const CalculatorButtonParent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 110;
  min-height: 250;
  height: auto;
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    min-width: 110;
    min-height: 250;
  }
  @media screen and (max-width: 450px) {
    min-height: auto;
  }
`;
const CalculatorGridParent = styled.section`
  align-self: stretch;
  border-radius: var(--br-mini);
  background-color: var(--color-gainsboro-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  width: auto;
  height: auto;
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
    background-color: var(--color-gainsboro-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-mini);
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CalculatorRoot = styled.div`
  width: 600px;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  text-align: right;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-montserrat);
  &:hover {
    background-color: var(--color-whitesmoke-200);
    display: flex;
    width: 600px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-xl);
    padding: var(--padding-xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Calculator: FunctionComponent<CalculatorType> = ({
  className = "",
  onClose,
}) => {
  return (
    <CalculatorRoot className={className}>
      <Wrapper>
        <A>585</A>
      </Wrapper>
      <CalculatorGridParent>
        <CalculatorGrid>
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="1"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="2"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="3"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="4"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="5"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="6"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="7"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="8"
          />
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop="9"
          />
          <CalculatorButton1>
            <Div>0</Div>
          </CalculatorButton1>
          <OperationButton1
            propWidth="80px"
            propBackgroundColor="#fff"
            prop={`<-`}
          />
        </CalculatorGrid>
        <OperationGrid>
          <OperationButton prop="+" />
          <OperationButton prop="-" />
          <OperationButton prop="*" />
          <OperationButton prop="/" />
        </OperationGrid>
        <CalculatorButtonParent>
          <CalculatorButton />
          <CalculatorButton2>
            <Div>=</Div>
          </CalculatorButton2>
        </CalculatorButtonParent>
      </CalculatorGridParent>
    </CalculatorRoot>
  );
};

export default Calculator;
