import { FunctionComponent } from "react";
import styled from "styled-components";

export type Menubar2Type = {
  className?: string;
};

const SectionA = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 45px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 500;
    font-family: var(--body-medium);
    font-size: var(--font-size-11xl);
    line-height: 45px;
    text-align: left;
    color: var(--color-black);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
`;
const MenubarItem = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-mini);
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  &:hover {
    background-color: var(--white);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-5xs);
    padding: var(--padding-7xs) var(--padding-mini);
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const MenuItems = styled.div`
  height: 58px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color-gray-500);
  box-sizing: border-box;
  display: flex;
  border: 1px solid var(--color-gray-500);
  &:hover {
    display: flex;
    width: 1px;
    height: 58px;
    border: 1px solid var(--color-gray-500);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1500px) {
    width: 100%;
    height: 1px;
  }
`;
const MenubarItem1 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-sandybrown);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-mini);
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  &:hover {
    background-color: var(--color-sandybrown);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-5xs);
    padding: var(--padding-7xs) var(--padding-mini);
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const MenubarRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--white);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-xl);
  gap: var(--gap-xl);
  width: auto;
  height: auto;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--body-medium);
  &:hover {
    background-color: var(--white);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    border-radius: var(--br-3xs);
    padding: var(--padding-3xs) var(--padding-xl);
    box-sizing: border-box;
    border: 1px solid var(--color-lightgray);
  }
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`;

const Menubar2: FunctionComponent<Menubar2Type> = ({ className = "" }) => {
  return (
    <MenubarRoot className={className}>
      <MenubarItem>
        <SectionA>Section A</SectionA>
      </MenubarItem>
      <MenuItems />
      <MenubarItem>
        <SectionA>Section B</SectionA>
      </MenubarItem>
      <MenuItems />
      <MenubarItem1>
        <SectionA>Section C</SectionA>
      </MenubarItem1>
      <MenuItems />
      <MenubarItem>
        <SectionA>Section D</SectionA>
      </MenubarItem>
      <MenuItems />
      <MenubarItem>
        <SectionA>Section E</SectionA>
      </MenubarItem>
      <MenuItems />
      <MenubarItem>
        <SectionA>Section F</SectionA>
      </MenubarItem>
    </MenubarRoot>
  );
};

export default Menubar2;
