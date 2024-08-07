import { FunctionComponent } from 'react';
import { Button } from "@mui/material"
import styled from "styled-components";


export type Type = {
  className?: string;
  onClose?: () => void;
}

const ResetPassword = styled.h1`margin: 0;
flex: 1;
position: relative;
font-size: inherit;
font-weight: 600;
font-family: inherit;
display: flex;
max-width: 100%;
height: auto;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--font-size-45xl);
text-align: center;
color: var(--white);
display: flex;
flex: 1;
height: auto;
max-width: 100%;
}
`;
const PasswordResetTitle = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-3xl);
box-sizing: border-box;
max-width: 100%;
width: auto;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
padding: 0px var(--padding-3xl);
box-sizing: border-box;
max-width: 100%;
}
`;
const TypeTheRecovery = styled.div`align-self: stretch;
height: 49px;
position: relative;
font-size: var(--font-size-5xl);
font-weight: 600;
display: flex;
flex-shrink: 0;
width: auto;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--font-size-5xl);
text-align: center;
color: var(--white);
display: flex;
align-self: stretch;
width: auto;
height: 49px;
}
@media screen and (max-width: 850px) {
font-size: var(--font-size-lgi);

}
`;
const EmailInputContainer = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
max-width: 100%;
width: auto;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
max-width: 100%;
}
`;
const Email = styled.div`width: 164px;
position: relative;
font-weight: 600;
display: flex;
flex-shrink: 0;
height: auto;
z-index: 1;
&:hover {
font-weight: 600;
font-family: var(--font-open-sans);
font-size: var(--font-size-5xl);
text-align: center;
color: var(--color-black);
display: flex;
width: 164px;
height: auto;
}
@media screen and (max-width: 850px) {
font-size: var(--font-size-lgi);

}
`;
const EmailFieldWrapper = styled.div`flex: 1;
border-radius: var(--br-20xl);
background-color: var(--white);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xl) var(--padding-xl);
box-sizing: border-box;
max-width: 100%;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
background-color: var(--white);
display: flex;
flex: 1;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-20xl);
padding: var(--padding-3xl) var(--padding-xl);
box-sizing: border-box;
max-width: 100%;
}
`;
const EmailFieldContainer = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-7xl);
box-sizing: border-box;
max-width: 100%;
width: auto;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
font-size: var(--font-size-5xl);
color: var(--color-black);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
padding: 0px var(--padding-7xl);
box-sizing: border-box;
max-width: 100%;
}
`;
const PasswordResetPopup = styled.section`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-xs);
max-width: 100%;
width: auto;
height: auto;
transform: rotate(0deg);
text-align: center;
font-size: var(--font-size-45xl);
color: var(--white);
font-family: var(--font-open-sans);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: column;
gap: var(--gap-xs);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
max-width: 100%;
}
`;
const SubmitButtonWrapper = styled(Button)`height: 73px;
width: 389px;
max-width: 100%;
background-color: var(--color-snow);
display: flex;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-18xl);
padding: var(--padding-mini) var(--padding-44xl) var(--padding-base);
box-sizing: border-box;
&:hover {
background-color: var(--color-snow);
display: flex;
width: 389px;
height: 73px;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-18xl);
padding: var(--padding-mini) var(--padding-44xl) var(--padding-base);
box-sizing: border-box;
max-width: 100%;
}
`;
const SubmitButtonContainer = styled.div`width: 613px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
max-width: 100%;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
width: 613px;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: center;
transform: rotate(0deg);
max-width: 100%;
}
`;
const ResetPasswordPopupRoot = styled.div`width: 748px;
position: relative;
background-color: var(--color-royalblue);
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-16xl) var(--padding-43xl) var(--padding-56xl);
box-sizing: border-box;
gap: var(--gap-51xl);
line-height: normal;
letter-spacing: normal;
height: auto;
&:hover {
background-color: var(--color-royalblue);
display: flex;
width: 748px;
height: auto;
flex-direction: column;
gap: var(--gap-51xl);
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-16xl) var(--padding-43xl) var(--padding-56xl);
box-sizing: border-box;
line-height: normal;
letter-spacing: normal;
}
@media screen and (max-width: 450px) {
gap: var(--gap-16xl);
padding-left: var(--padding-xl);
padding-right: var(--padding-xl);
box-sizing: border-box;

}
`;


const :FunctionComponent<Type> = ({ className="", onClose }) => {
  return (
    <ResetPasswordPopupRoot className={className}>
      <PasswordResetPopup>
        <EmailInputContainer>
          <PasswordResetTitle>
            <ResetPassword>Reset Password</ResetPassword>
          </PasswordResetTitle>
          <TypeTheRecovery>Type the recovery email you want to send the link to.</TypeTheRecovery>
        </EmailInputContainer>
        <EmailFieldContainer>
          <EmailFieldWrapper>
            <Email>Email</Email>
          </EmailFieldWrapper>
        </EmailFieldContainer>
      </PasswordResetPopup>
      <SubmitButtonContainer>
        <SubmitButtonWrapper disableElevation variant="contained" sx={{ textTransform: "none",color: "#0077ff",fontSize: "24",background: "#fffbfb",borderRadius: "37px","&:hover": { background: "#fffbfb" },width: 389,height: 73 }}>SUBMIT</SubmitButtonWrapper>
      </SubmitButtonContainer>
    </ResetPasswordPopupRoot>);
};

export default ;
