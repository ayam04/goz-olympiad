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
const LookingForLove = styled.b`width: 103px;
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
width: 103px;
height: auto;
}
`;
const ListenAgain = styled.div`position: relative;
letter-spacing: -0.01em;
line-height: 20px;
display: flex;
min-width: 61;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
line-height: 20px;
text-align: left;
color: var(--white);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 61;
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
const ListenAgain1 = styled.div`position: relative;
letter-spacing: -0.01em;
display: flex;
min-width: 92;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
text-align: left;
color: var(--white);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 92;
}
`;
const ListenAgainParent = styled.div`display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-9xs-5);
width: auto;
align-self: unset;
height: auto;
&:hover {
display: flex;
width: auto;
align-self: unset;
height: auto;
flex-direction: row;
gap: var(--gap-9xs-5);
align-items: flex-start;
justify-content: flex-start;
}
`;
const LookingForLoveLeeDaggerDParent = styled.div`overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-13xl) 0px 0px;
box-sizing: border-box;
gap: var(--gap-9xs);
width: auto;
align-self: unset;
height: auto;
&:hover {
display: flex;
width: auto;
align-self: unset;
height: auto;
flex-direction: column;
gap: var(--gap-9xs);
align-items: flex-start;
justify-content: flex-start;
padding: 0px var(--padding-13xl) 0px 0px;
box-sizing: border-box;
}
`;
const FrameWrapper = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-10xs) 0px 0px;
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
padding: var(--padding-10xs) 0px 0px;
box-sizing: border-box;
}
`;
const RectangleParentRoot = styled.div`position: relative;
width: auto;
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-5xs);
align-self: unset;
height: auto;
text-align: left;
font-size: var(--font-size-base);
color: var(--white);
font-family: var(--body-medium);
&:hover {
display: flex;
width: auto;
align-self: unset;
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
      <InstanceChild loading="lazy" alt="" src="/rectangle-2-4@2x.png" />
      <FrameWrapper>
        <LookingForLoveLeeDaggerDParent>
          <LookingForLove>Cheap Thrills</LookingForLove>
          <ListenAgainParent>
            <ListenAgain>Jessie J</ListenAgain>
            <EllipseWrapper>
              <FrameChild />
            </EllipseWrapper>
            <ListenAgain1>Listen Again</ListenAgain1>
          </ListenAgainParent>
        </LookingForLoveLeeDaggerDParent>
      </FrameWrapper>
    </RectangleParentRoot>);
};

export default ;
