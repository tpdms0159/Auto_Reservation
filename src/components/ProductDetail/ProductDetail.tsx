import React from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  Title,
  Wrapper,
  LabelWrapper,
  Text,
  Button,
} from './ProductDetailStyle';
import tempImg from 'assets/login.png';

function ProductDetail() {
  const data = [
    { label: '장소', value: '예술의 전당 CJ 토월극장' },
    { label: '공연기간', value: '2024.12.06 ~ 2025.02.03' },
    { label: '공연시간', value: '160분(인터미션 20분 포함)' },
    { label: '관람연령', value: '초등학생 이상 관람가' },
    { label: '가격', value: '150,000원' },
  ];
  return (
    <Wrapper>
      <Title>뮤지컬 [시라노]</Title>
      <InfoWrapper>
        <Poster src={tempImg} />
        <InfoBox>
          {data.map((data, ind) => {
            return (
              <LabelWrapper key={ind}>
                <Text width="30%">{data.label}</Text>
                <Text width="60%">{data.value}</Text>
              </LabelWrapper>
            );
          })}
          <Button>예매하기</Button>
        </InfoBox>
      </InfoWrapper>
    </Wrapper>
  );
}

export default ProductDetail;
