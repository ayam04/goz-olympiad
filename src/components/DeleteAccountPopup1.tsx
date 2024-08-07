import { FunctionComponent } from 'react';
import { TextField,InputAdornment,Icon,IconButton,Button } from "@mui/material"
import styled from "styled-components";


export type Type = {
  className?: string;
  onClose?: () => void;
}

const DeleteAccount = styled.h1`margin: 0;
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
const DeleteAccountWrapper = styled.div`align-self: stretch;
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
const TypeIWant = styled.div`align-self: stretch;
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
const FrameGroup = styled.div`align-self: stretch;
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
const FrameChild = styled(TextField)`border: none;
background-color: var(--white);
height: 80px;
flex: 1;
font-family: var(--font-open-sans);
font-weight: 600;
font-size: var(--font-size-5xl);
color: var(--color-black);
max-width: 100%;
display: flex;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
border-radius: var(--br-20xl);
padding: var(--padding-3xl) var(--padding-xl);
box-sizing: border-box;
&:hover {
background-color: var(--white);
display: flex;
flex: 1;
height: 80px;
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
const FrameWrapper = styled.div`align-self: stretch;
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
const FrameParent = styled.section`align-self: stretch;
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
const FrameItem = styled(Button)`height: 73px;
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
const DeleteAccountPopupInner = styled.div`width: 613px;
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
const DeleteAccountPopupRoot = styled.div`width: 748px;
position: relative;
background-color: var(--color-red);
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
background-color: var(--color-red);
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
    <DeleteAccountPopupRoot className={className}>
      <FrameParent>
        <FrameGroup>
          <DeleteAccountWrapper>
            <DeleteAccount>Delete Account</DeleteAccount>
          </DeleteAccountWrapper>
          <TypeIWant>Type “I WANT TO DELETE MY ACCOUNT” to continue.</TypeIWant>
        </FrameGroup>
        <FrameWrapper>
          <FrameChild placeholder="Type" variant="outlined" sx={{ "& fieldset": { border: "none" },"& .MuiInputBase-root": { height: "80px",backgroundColor: "#fff",borderRadius: "39px",fontSize: "24px" },"& .MuiInputBase-input": { color: "#000" } }} />
        </FrameWrapper>
      </FrameParent>
      <DeleteAccountPopupInner>
        <FrameItem disableElevation variant="contained" sx={{ textTransform: "none",color: "#ff0000",fontSize: "24",background: "#fffbfb",borderRadius: "37px","&:hover": { background: "#fffbfb" },width: 389,height: 73 }}>DELETE</FrameItem>
      </DeleteAccountPopupInner>
    </DeleteAccountPopupRoot>);
};

export default ;
