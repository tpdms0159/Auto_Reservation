import React from 'react';
import MypageList from 'components/MypageList/MypageList';
import { Title } from 'components/ProductDetail/ProductDetailStyle';

function Mypage() {
  const data = [
    {
      reservationNumber: '123456789',
      title: '뮤지컬 <시라노>',
      state: '예매 완료',
      reservationDate: '2024.12.12',
      productDate: '2024.01.01',
    },
  ];
  return (
    <>
      <Title style={{ textAlign: 'center', fontWeight: 'bold' }}>
        예약 확인
      </Title>
      {data.map((data, ind) => {
        return (
          <MypageList
            key={ind}
            reservationNumber={data.reservationNumber}
            title={data.title}
            state={data.state}
            reservationDate={data.reservationDate}
            productDate={data.productDate}
          />
        );
      })}
    </>
  );
}

export default Mypage;
