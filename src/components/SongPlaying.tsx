import { FunctionComponent } from 'react';
import styled from "styled-components";

const SongBackgroundsIcon = styled.img`height: 48px;
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
const LookingForLove = styled.b`width: 50px;
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
width: 50px;
height: auto;
}
`;
const ListenAgain = styled.div`position: relative;
letter-spacing: -0.01em;
line-height: 20px;
display: flex;
min-width: 118;
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
min-width: 118;
}
`;
const SongListItemEllipsisContaiChild = styled.div`width: 6px;
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
const SongListItemEllipsisContai = styled.div`display: flex;
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
const ListenAgain1 = styled.div`width: 92px;
position: relative;
letter-spacing: -0.01em;
display: flex;
align-items: center;
height: auto;
&:hover {
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
text-align: left;
color: var(--white);
display: flex;
width: 92px;
height: auto;
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
const SongTitles = styled.div`align-self: stretch;
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
const SongListItemContent = styled.div`flex: 1;
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
const SongPlayingRoot = styled.div`width: 254px;
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
    <SongPlayingRoot className={className}>
      <SongBackgroundsIcon loading="lazy" alt="" src="/rectangle-2@2x.png" />
      <SongListItemContent>
        <SongTitles>
          <LookingForLove>Happy</LookingForLove>
          <ListenAgainParent>
            <ListenAgain>Robbie Williams</ListenAgain>
            <SongListItemEllipsisContai>
              <SongListItemEllipsisContaiChild />
            </SongListItemEllipsisContai>
            <ListenAgain1>Listen Again</ListenAgain1>
          </ListenAgainParent>
        </SongTitles>
      </SongListItemContent>
    </SongPlayingRoot>);
};

export default ;
