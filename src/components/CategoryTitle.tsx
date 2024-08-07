import { FunctionComponent } from 'react';
import styled from "styled-components";

const AvatarIcon = styled.img`position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
object-fit: cover;
display: flex;
gap: var(--gap-0);
&:hover {
display: flex;
width: 100%;
height: 100%;
gap: var(--gap-0);
}
`;
const AvatarWAddons = styled.div`width: 48px;
height: 48px;
position: relative;
display: flex;
gap: var(--gap-0);
&:hover {
display: flex;
width: 48px;
height: 48px;
gap: var(--gap-0);
}
`;
const AvatarWAddonsWrapper = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-12xs) 0px 0px;
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
padding: var(--padding-12xs) 0px 0px;
box-sizing: border-box;
}
`;
const SufyanAli = styled.div`position: relative;
letter-spacing: -0.01em;
line-height: 24px;
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-family: var(--body-medium);
font-size: var(--font-size-base);
letter-spacing: -0.01em;
line-height: 24px;
text-align: left;
color: var(--white);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
`;
const ListenAgain = styled.h1`margin: 0;
position: relative;
font-size: var(--font-size-13xl);
letter-spacing: -0.01em;
line-height: 24px;
font-weight: 700;
font-family: inherit;
display: flex;
width: auto;
align-self: unset;
height: auto;
&:hover {
font-weight: 700;
font-family: var(--body-medium);
font-size: var(--font-size-13xl);
letter-spacing: -0.01em;
line-height: 24px;
text-align: left;
color: var(--white);
display: flex;
width: auto;
align-self: unset;
height: auto;
}
@media screen and (max-width: 1225px) {
font-size: 26px;
line-height: 19px;

}
@media screen and (max-width: 450px) {
font-size: var(--font-size-lgi);
line-height: 14px;

}
`;
const SufyanAliParent = styled.div`flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xs);
height: auto;
&:hover {
display: flex;
flex: 1;
height: auto;
flex-direction: column;
gap: var(--gap-11xs);
align-items: flex-start;
justify-content: flex-start;
}
`;
const CategoryTitleRoot = styled.div`width: 278px;
position: relative;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-xs);
height: auto;
text-align: left;
font-size: var(--font-size-base);
color: var(--white);
font-family: var(--body-medium);
&:hover {
display: flex;
width: 278px;
height: auto;
flex-direction: row;
gap: var(--gap-xs);
align-items: flex-start;
justify-content: flex-start;
}
`;


const :FunctionComponent = ({ className="" }) => {
  return (
    <CategoryTitleRoot className={className}>
      <AvatarWAddonsWrapper>
        <AvatarWAddons>
          <AvatarIcon loading="lazy" alt="" src="/avatar-1@2x.png" />
        </AvatarWAddons>
      </AvatarWAddonsWrapper>
      <SufyanAliParent>
        <SufyanAli>START RADIO FROM A SONG</SufyanAli>
        <ListenAgain>Quick picks</ListenAgain>
      </SufyanAliParent>
    </CategoryTitleRoot>);
};

export default ;
