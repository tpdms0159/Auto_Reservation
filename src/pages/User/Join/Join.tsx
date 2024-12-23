import JoinForm from 'components/JoinForm/JoinForm';
import React, { useState } from 'react';
import { SubTitle, Title, Wrapper } from './JoinStyle';
import JoinFinish from 'components/JoinFinish/JoinFinish';

function Join() {
  const [state] = useState(false);
  return (
    <>
      {state ? (
        <Wrapper>
          <Title>회원가입</Title>
          <SubTitle>가입을 통해 다양한 공연을 관람해보세요!</SubTitle>
          <JoinForm />
        </Wrapper>
      ) : (
        <JoinFinish />
      )}
    </>
  );
}

export default Join;
