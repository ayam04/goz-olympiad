import { FunctionComponent } from 'react';
import styled from "styled-components";

const Landscape12jpgIcon = styled.img`height: 50px;
width: 50px;
position: relative;
border-radius: var(--br-31xl);
overflow: hidden;
flex-shrink: 0;
object-fit: cover;
display: flex;
gap: var(--gap-0);
&:hover {
display: flex;
width: 50px;
height: 50px;
gap: var(--gap-0);
border-radius: var(--br-31xl);
flex-shrink: 0;
}
`;
const IpadPro = styled.div`position: relative;
line-height: 21px;
display: flex;
min-width: 57;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--font-poppins);
font-size: var(--body-medium-size);
line-height: 21px;
text-align: left;
color: var(--color-gray-200);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 57;
}
`;
const Div = styled.div`flex: 1;
position: relative;
line-height: 10.5px;
font-weight: 100;
display: flex;
min-width: 25.7;
white-space: nowrap;
height: auto;
&:hover {
font-weight: 100;
font-family: var(--font-poppins);
font-size: var(--font-size-2xs-5);
line-height: 10.5px;
text-align: center;
color: var(--white);
display: flex;
flex: 1;
height: auto;
min-width: 25.7;
white-space: nowrap;
}
`;
const Background = styled.div`width: 38px;
border-radius: 2.63px;
background-color: var(--color-orangered);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-11xs-3) var(--padding-7xs) var(--padding-9xs-9);
box-sizing: border-box;
height: auto;
gap: var(--gap-0);
text-align: center;
font-size: var(--font-size-2xs-5);
color: var(--white);
&:hover {
background-color: var(--color-orangered);
display: flex;
width: 38px;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
border-radius: 2.63px;
padding: var(--padding-11xs-3) var(--padding-7xs) var(--padding-9xs-9);
box-sizing: border-box;
}
`;
const IpadProParent = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
padding: 0px var(--padding-14xl) 0px 0px;
box-sizing: border-box;
gap: var(--gap-xl);
width: auto;
height: auto;
transform: rotate(0deg);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-xl);
align-items: flex-start;
justify-content: space-between;
transform: rotate(0deg);
padding: 0px var(--padding-14xl) 0px 0px;
box-sizing: border-box;
}
`;
const AnythingYouCan = styled.div`position: relative;
line-height: 18px;
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--font-poppins);
font-size: var(--font-size-xs);
line-height: 18px;
text-align: left;
color: var(--color-darkgray);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
`;
const Container = styled.div`align-self: stretch;
height: 18px;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
padding: 0px var(--padding-15xl) var(--padding-12xs-5) 0px;
box-sizing: border-box;
width: auto;
gap: var(--gap-0);
font-size: var(--font-size-xs);
color: var(--color-darkgray);
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: 18px;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-end;
justify-content: flex-start;
padding: 0px var(--padding-15xl) var(--padding-12xs-5) 0px;
box-sizing: border-box;
}
`;
const FrameParent = styled.div`flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-12xs-5);
min-width: 177;
flex-shrink: 0;
height: auto;
transform: rotate(0deg);
&:hover {
display: flex;
flex: 1;
height: auto;
flex-direction: column;
gap: var(--gap-12xs-5);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
min-width: 177;
flex-shrink: 0;
}
`;
const ItemRoot = styled.div`width: 100%;
position: relative;
background-color: var(--white);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs-5) 0px var(--padding-2xs);
box-sizing: border-box;
gap: var(--gap-3xs);
height: auto;
text-align: left;
font-size: var(--body-medium-size);
color: var(--color-gray-200);
font-family: var(--font-poppins);
&:hover {
background-color: var(--white);
display: flex;
width: 100%;
height: auto;
flex-direction: row;
gap: var(--gap-3xs);
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs-5) 0px var(--padding-2xs);
box-sizing: border-box;
}
@media screen and (max-width: 450px) {
flex-wrap: wrap;

}
`;


const :FunctionComponent = ({ className="" }) => {
  return (
    <ItemRoot className={className}>
      <Landscape12jpgIcon loading="lazy" alt="" src="/landscape1jpg2@2x.png" />
      <FrameParent>
        <IpadProParent>
          <IpadPro>iPad Pro</IpadPro>
          <Background>
            <Div>$289</Div>
          </Background>
        </IpadProParent>
        <Container>
          <AnythingYouCan>Anything you can do, you can do better.</AnythingYouCan>
        </Container>
      </FrameParent>
    </ItemRoot>);
};

export default ;
