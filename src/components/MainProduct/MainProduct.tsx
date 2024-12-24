import React from 'react';
import { Poster, Wrapper, Text } from './MainProductStyle';
import poster from 'assets/login.png';
interface MainProductProps {
  title: string;
  productPeriod: string;
}

function MainProduct({ title, productPeriod }: MainProductProps) {
  return (
    <Wrapper>
      <Poster src={poster} />
      <Text>{title} </Text>
      <Text>초등학생 이상 관람가 </Text>
      <Text>{productPeriod}</Text>
    </Wrapper>
  );
}

export default MainProduct;
