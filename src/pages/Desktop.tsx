import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import InstructionsModal from "../components/InstructionsModal";
import PortalPopup from "../components/PortalPopup";
import Calculator from "../components/Calculator";
import MainWindow from "../components/MainWindow";
import MenuBar1 from "../components/MenuBar1";
import styled from "styled-components";
import Summary from "../components/Summary";

const Button2 = styled(Button)`
  height: 34px;
  flex: 1;
  min-width: 476;
  max-width: 100%;
  background-color: var(--color-darkslategray);
  display: flex;
  flex-direction: row;
  gap: var(--gap-5xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-8xs) var(--padding-274xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-darkslategray);
    display: flex;
    flex: 1;
    height: 34px;
    flex-direction: row;
    gap: var(--gap-5xs);
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-8xs) var(--padding-274xl);
    box-sizing: border-box;
    min-width: 476;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Button3 = styled(Button)`
  height: 34px;
  flex: 1;
  min-width: 476;
  max-width: 100%;
  background-color: var(--color-darkslategray);
  display: flex;
  flex-direction: row;
  gap: var(--gap-5xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-8xs) var(--padding-276xl);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: var(--color-darkslategray);
    display: flex;
    flex: 1;
    height: 34px;
    flex-direction: row;
    gap: var(--gap-5xs);
    align-items: center;
    justify-content: center;
    border-radius: var(--br-7xs);
    padding: var(--padding-8xs) var(--padding-276xl);
    box-sizing: border-box;
    min-width: 476;
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FooterActions = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
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
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Navigation1 = styled.section`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 830;
  max-width: calc(100% - 336px);
  height: auto;
  gap: var(--gap-3xs);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: space-between;
    min-height: 830;
    max-width: calc(100% - 336px);
  }
  @media screen and (max-width: 1225px) {
    max-width: 100%;
  }
`;
const Content1 = styled.main`
  align-self: stretch;
  border-radius: var(--br-11xl);
  border: 3px solid var(--color-chocolate-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-mid);
  gap: var(--gap-11xl);
  max-width: 100%;
  width: auto;
  height: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-11xl);
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-11xl);
    padding: var(--padding-base) var(--padding-mid);
    box-sizing: border-box;
    border: 3px solid var(--color-chocolate-100);
    max-width: 100%;
  }
`;
const DesktopRoot = styled.div`
  width: 1920px;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-6xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  &:hover {
    background-color: var(--white);
    display: flex;
    width: 1920px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-6xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Desktop: FunctionComponent = () => {
  const [isInstructionsModalOpen, setInstructionsModalOpen] = useState(false);
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);

  const openInstructionsModal = useCallback(() => {
    setInstructionsModalOpen(true);
  }, []);

  const closeInstructionsModal = useCallback(() => {
    setInstructionsModalOpen(false);
  }, []);

  const openCalculator = useCallback(() => {
    setCalculatorOpen(true);
  }, []);

  const closeCalculator = useCallback(() => {
    setCalculatorOpen(false);
  }, []);

  return (
    <>
      <DesktopRoot>
        <MainWindow />
        <Content1>
          <Navigation1>
            <MenuBar1 />
            <FooterActions>
              <Button2
                startIcon={
                  <img width="20px" height="20px" src="/iconalertcircle.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#334155",
                  borderRadius: "6px",
                  "&:hover": { background: "#334155" },
                  height: 34,
                }}
                onClick={openInstructionsModal}
              >
                Read Instructions
              </Button2>
              <Button3
                startIcon={
                  <img width="24px" height="24px" src="/iconcalculator.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#334155",
                  borderRadius: "6px",
                  "&:hover": { background: "#334155" },
                  height: 34,
                }}
                onClick={openCalculator}
              >
                Open Calculator
              </Button3>
            </FooterActions>
          </Navigation1>
          <Summary />
        </Content1>
      </DesktopRoot>
      {isInstructionsModalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInstructionsModal}
        >
          <InstructionsModal onClose={closeInstructionsModal} />
        </PortalPopup>
      )}
      {isCalculatorOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalculator}
        >
          <Calculator onClose={closeCalculator} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop;
