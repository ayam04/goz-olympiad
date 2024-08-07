import { FunctionComponent } from 'react';
import styled from "styled-components";

const InstanceChild = styled.img`width: 200px;
height: 200px;
position: relative;
border-radius: var(--br-231xl);
object-fit: cover;
display: flex;
&:hover {
display: flex;
width: 200px;
height: 200px;
border-radius: var(--br-231xl);
}
`;
const ListenAgain = styled.b`position: relative;
letter-spacing: -0.01em;
display: flex;
min-width: 96;
font-weight: 700;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-weight: 700;
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
text-align: left;
color: var(--white);
display: flex;
width: auto;
align-self: unset;
height: auto;
min-width: 96;
}
`;
const MSubscribers = styled.div`position: relative;
letter-spacing: -0.01em;
display: flex;
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
}
`;
const MSubscribersWrapper = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: auto;
align-self: unset;
height: auto;
gap: var(--gap-9xs);
&:hover {
display: flex;
width: auto;
align-self: unset;
height: auto;
flex-direction: row;
gap: var(--gap-9xs);
align-items: center;
justify-content: center;
}
`;
const ListenAgainParent = styled.div`display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px var(--padding-xl);
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
align-items: center;
justify-content: center;
padding: 0px var(--padding-xl);
box-sizing: border-box;
}
`;
const RectangleParentRoot = styled.div`flex: 1;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: var(--gap-5xs);
min-width: 80;
height: auto;
text-align: left;
font-size: var(--font-size-base);
color: var(--white);
font-family: var(--body-medium);
&:hover {
display: flex;
width: 100%;
height: auto;
flex-direction: column;
gap: var(--gap-5xs);
align-items: center;
justify-content: center;
min-width: 80;
}
`;


const :FunctionComponent = ({ className="" }) => {
  return (
    <RectangleParentRoot className={className}>
      <InstanceChild loading="lazy" alt="" src="/rectangle-2-22@2x.png" />
      <ListenAgainParent>
        <ListenAgain>Listen Again</ListenAgain>
        <MSubscribersWrapper>
          <MSubscribers>4.53M subscribers</MSubscribers>
        </MSubscribersWrapper>
      </ListenAgainParent>
    </RectangleParentRoot>);
};

export default ;
