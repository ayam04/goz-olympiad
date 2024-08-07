import { FunctionComponent } from 'react';
import styled from "styled-components";

const BackgroundIcon = styled.img`width: 70px;
height: 70px;
position: relative;
border-radius: var(--br-51xl);
background-color: var(--color-orangered);
display: flex;
gap: var(--gap-0);
&:hover {
background-color: var(--color-orangered);
display: flex;
width: 70px;
height: 70px;
gap: var(--gap-0);
border-radius: var(--br-51xl);
}
`;
const BackgroundWrapper = styled.div`height: 70px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs) 0px 0px;
box-sizing: border-box;
width: auto;
align-self: unset;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
width: auto;
align-self: unset;
height: 70px;
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
padding: var(--padding-3xs) 0px 0px;
box-sizing: border-box;
}
`;
const TotalVisits = styled.div`position: relative;
line-height: 24px;
text-transform: uppercase;
display: flex;
min-width: 98.3;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--font-poppins);
font-size: var(--font-size-base);
line-height: 24px;
text-align: left;
color: var(--color-gray-100);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 98.3;
}
`;
const Container = styled.div`height: 24px;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
padding: 0px var(--padding-17xl) var(--padding-12xs-5) 0px;
box-sizing: border-box;
width: auto;
align-self: unset;
gap: var(--gap-0);
&:hover {
display: flex;
width: auto;
align-self: unset;
height: 24px;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-end;
justify-content: flex-start;
padding: 0px var(--padding-17xl) var(--padding-12xs-5) 0px;
box-sizing: border-box;
}
`;
const Div = styled.div`position: relative;
font-size: var(--font-size-2xl);
line-height: 31.5px;
font-weight: 300;
display: flex;
min-width: 62.2;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-weight: 300;
font-family: var(--font-poppins);
font-size: var(--font-size-2xl);
line-height: 31.5px;
text-align: left;
color: var(--color-gray-100);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 62.2;
}
@media screen and (max-width: 450px) {
font-size: var(--font-size-mid);
line-height: 25px;

}
`;
const ContainerParent = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: auto;
align-self: unset;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
width: auto;
align-self: unset;
height: auto;
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
}
`;
const HorizontalDivider = styled.div`height: 2px;
width: 58px;
position: relative;
background-color: var(--color-orangered);
display: flex;
&:hover {
background-color: var(--color-orangered);
display: flex;
width: 58px;
height: 2px;
}
`;
const HorizontalDivider1 = styled.div`align-self: stretch;
background-color: var(--color-gray-300);
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
width: auto;
height: auto;
gap: var(--gap-0);
&:hover {
background-color: var(--color-gray-300);
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
}
`;
const IncreaseIn = styled.div`position: relative;
line-height: 24px;
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--font-poppins);
font-size: var(--font-size-base);
line-height: 24px;
text-align: left;
color: var(--color-slategray);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
`;
const Container1 = styled.div`height: 24px;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
padding: 0px 0px var(--padding-12xs-5);
box-sizing: border-box;
width: auto;
align-self: unset;
gap: var(--gap-0);
color: var(--color-slategray);
&:hover {
display: flex;
width: auto;
align-self: unset;
height: 24px;
flex-direction: row;
gap: var(--gap-0);
align-items: flex-end;
justify-content: flex-start;
padding: 0px 0px var(--padding-12xs-5);
box-sizing: border-box;
}
`;
const FrameParent = styled.div`flex: 1;
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
`;
const BackgroundshadowRoot = styled.div`flex: 1;
width: 100%;
position: relative;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
background-color: var(--white);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-6xl) var(--padding-mini);
box-sizing: border-box;
gap: var(--gap-xl);
min-width: 172;
height: auto;
text-align: left;
font-size: var(--font-size-base);
color: var(--color-gray-100);
font-family: var(--font-poppins);
&:hover {
background-color: var(--white);
display: flex;
width: 100%;
height: auto;
flex-direction: row;
gap: var(--gap-xl);
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-6xl) var(--padding-mini);
box-sizing: border-box;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
min-width: 172;
}
`;


const :FunctionComponent = ({ className="" }) => {
  return (
    <BackgroundshadowRoot className={className}>
      <BackgroundWrapper>
        <BackgroundIcon loading="lazy" alt="" src="/background.svg" />
      </BackgroundWrapper>
      <FrameParent>
        <ContainerParent>
          <Container>
            <TotalVisits>Total Visits</TotalVisits>
          </Container>
          <Div>15,489</Div>
        </ContainerParent>
        <HorizontalDivider1>
          <HorizontalDivider />
        </HorizontalDivider1>
        <Container1>
          <IncreaseIn>40% Increase in…</IncreaseIn>
        </Container1>
      </FrameParent>
    </BackgroundshadowRoot>);
};

export default ;
