import React from 'react';
import {
  Wrapper,
  Text,
  InfoBox,
  Label,
  LabelWrapper,
  Info,
} from './JoinFinishStyle';

function JoinFinish() {
  return (
    <Wrapper>
      <Text>회원가입이 완료되었습니다!</Text>
      <Text fontSize="2rem">
        환영합니다. 로그인 후 서비스를 이용할 수 있습니다.
      </Text>
      <InfoBox>
        <LabelWrapper>
          <Label>이름</Label>
          <Info>신아름</Info>
        </LabelWrapper>
        <LabelWrapper>
          <Label>아이디</Label>
          <Info>ocar1115</Info>
        </LabelWrapper>
      </InfoBox>
    </Wrapper>
  );
}

export default JoinFinish;
