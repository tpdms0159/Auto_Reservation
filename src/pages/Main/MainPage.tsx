import React from 'react';
import MainProduct from 'components/MainProduct/MainProduct';
import { Title } from 'components/ProductDetail/ProductDetailStyle';

function MainPage() {
  const data = [
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
  ];
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Title style={{ textAlign: 'center' }}>이달의 공연</Title>
      {data.map((data, ind) => {
        return (
          <MainProduct
            key={ind}
            title={data.title}
            productPeriod={data.productPeriod}
          />
        );
      })}
    </div>
  );
}

export default MainPage;
