import { FunctionComponent } from 'react';
import styled from "styled-components";

const InstanceChild = styled.img`height: 48px;
width: 48px;
position: relative;
object-fit: cover;
min-height: 48;
display: flex;
&:hover {
display: flex;
width: 48px;
height: 48px;
min-height: 48;
}
`;
const LookingForLove = styled.b`width: 91px;
position: relative;
letter-spacing: -0.01em;
display: flex;
align-items: center;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: 700;
height: auto;
&:hover {
font-weight: 700;
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
text-align: left;
color: var(--white);
display: flex;
width: 91px;
height: auto;
}
`;
const ListenAgain = styled.div`flex: 1;
position: relative;
letter-spacing: -0.01em;
display: flex;
min-width: 92;
height: auto;
&:hover {
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
text-align: left;
color: var(--white);
display: flex;
flex: 1;
height: auto;
min-width: 92;
}
`;
const FrameChild = styled.div`width: 6px;
height: 6px;
position: relative;
border-radius: 50%;
background-color: var(--color-gainsboro-200);
display: flex;
&:hover {
background-color: var(--color-gainsboro-200);
display: flex;
width: 6px;
height: 6px;
}
`;
const EllipseWrapper = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-6xs-5) 0px 0px;
box-sizing: border-box;
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
padding: var(--padding-6xs-5) 0px 0px;
box-sizing: border-box;
}
`;
const ListenAgainParent = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-9xs);
width: auto;
height: auto;
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: row;
gap: var(--gap-9xs);
align-items: flex-start;
justify-content: flex-start;
}
`;
const LookingForLoveLeeDaggerDParent = styled.div`align-self: stretch;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-9xs);
width: auto;
height: auto;
&:hover {
display: flex;
align-self: stretch;
width: auto;
height: auto;
flex-direction: column;
gap: var(--gap-9xs);
align-items: flex-start;
justify-content: flex-start;
}
`;
const FrameWrapper = styled.div`flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-10xs) 0px 0px;
box-sizing: border-box;
height: auto;
gap: var(--gap-0);
transform: rotate(0deg);
&:hover {
display: flex;
flex: 1;
height: auto;
flex-direction: column;
gap: var(--gap-0);
align-items: flex-start;
justify-content: flex-start;
transform: rotate(0deg);
padding: var(--padding-10xs) 0px 0px;
box-sizing: border-box;
}
`;
const RectangleParentRoot = styled.div`width: 254px;
position: relative;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-5xs);
height: auto;
text-align: left;
font-size: var(--font-size-base);
color: var(--white);
font-family: var(--body-medium);
&:hover {
display: flex;
width: 254px;
height: auto;
flex-direction: row;
gap: var(--gap-5xs);
align-items: flex-start;
justify-content: flex-start;
}
`;


const :FunctionComponent = ({ className="" }) => {
  return (
    <RectangleParentRoot className={className}>
      <InstanceChild loading="lazy" alt="" src="/rectangle-2-9@2x.png" />
      <FrameWrapper>
        <LookingForLoveLeeDaggerDParent>
          <LookingForLove>Radioactive</LookingForLove>
          <ListenAgainParent>
            <ListenAgain>Listen Again</ListenAgain>
            <EllipseWrapper>
              <FrameChild />
            </EllipseWrapper>
            <ListenAgain>Listen Again</ListenAgain>
          </ListenAgainParent>
        </LookingForLoveLeeDaggerDParent>
      </FrameWrapper>
    </RectangleParentRoot>);
};

export default ;
