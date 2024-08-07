import { FunctionComponent } from "react";
import styled from "styled-components";

export type CalculatorButtonType = {
  className?: string;
};

const History1 = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: flex;
  width: auto;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
`;
const CalculatorButtonChild = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  width: auto;
  border: 1px solid var(--color-gray-400);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 1px;
    border: 1px solid var(--color-gray-400);
    box-sizing: border-box;
    flex-shrink: 0;
  }
`;
const A = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: flex;
  min-width: 35;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 35;
  }
`;
const EmptyGrid = styled.div`
  width: 16px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: right;
  display: flex;
  min-width: 16;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: right;
    color: var(--color-black);
    display: flex;
    width: 16px;
    height: auto;
    min-width: 16;
  }
`;
const Parent = styled.div`
  align-self: stretch;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-3xs);
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
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
`;
const Div = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  min-width: 31;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 31;
  }
`;
const Div1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: right;
  display: flex;
  min-width: 22;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: right;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 22;
  }
`;
const Div2 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  min-width: 64;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 64;
  }
`;
const Div3 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: right;
  display: flex;
  min-width: 18;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: right;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 18;
  }
`;
const Div4 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  min-width: 62;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 62;
  }
`;
const Div5 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  min-width: 35;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 35;
  }
`;
const Div6 = styled.div`
  height: auto;
  width: 35px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: center;
    color: var(--color-black);
    display: flex;
    width: 35px;
    height: auto;
  }
`;
const Div7 = styled.div`
  align-self: stretch;
  width: 16px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: right;
  display: flex;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--body-medium-size);
    line-height: 24px;
    text-align: right;
    color: var(--color-black);
    display: flex;
    width: 16px;
    height: auto;
  }
`;
const Parent1 = styled.div`
  align-self: stretch;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 24px;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
    flex-shrink: 0;
  }
`;
const CalculatorButtonRoot = styled.div`
  height: 170px;
  width: 150px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-7xs);
  background-color: var(--white);
  border: 1px solid var(--slate-200);
  box-sizing: border-box;
  overflow-y: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-6xs) 0px;
  gap: var(--gap-11xs);
  text-align: center;
  font-size: var(--body-medium-size);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
    background-color: var(--white);
    display: flex;
    width: 150px;
    height: 170px;
    flex-direction: column;
    gap: var(--gap-11xs);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-7xs);
    padding: var(--padding-5xs) var(--padding-6xs) 0px;
    box-sizing: border-box;
    border: 1px solid var(--slate-200);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const CalculatorButton: FunctionComponent<CalculatorButtonType> = ({
  className = "",
}) => {
  return (
    <CalculatorButtonRoot className={className}>
      <History1>History</History1>
      <CalculatorButtonChild />
      <Parent>
        <A>3 * 4</A>
        <EmptyGrid>12</EmptyGrid>
      </Parent>
      <CalculatorButtonChild />
      <Parent>
        <Div>4 / 5</Div>
        <Div1>0.8</Div1>
      </Parent>
      <CalculatorButtonChild />
      <Parent>
        <Div2>20 * 5 / 2</Div2>
        <Div3>50</Div3>
      </Parent>
      <CalculatorButtonChild />
      <Parent>
        <Div4>12 * 6 / 3</Div4>
        <Div3>24</Div3>
      </Parent>
      <CalculatorButtonChild />
      <Parent>
        <Div5>3 * 4</Div5>
        <EmptyGrid>12</EmptyGrid>
      </Parent>
      <CalculatorButtonChild />
      <Parent1>
        <Div6>3 * 4</Div6>
        <Div7>12</Div7>
      </Parent1>
      <CalculatorButtonChild />
    </CalculatorButtonRoot>
  );
};

export default CalculatorButton;
