import React, { useState } from 'react';
import {
  Box,
  CntInfo,
  CustomCalendar,
  CustomSelect,
  InfoWrapper,
  ReservationBox,
  SubInfo,
  Title,
  TotalInfo,
  Wrapper,
  Label,
  Value,
  Button,
  ButtonBox,
} from './ReservationDetailStyle';
import moment from 'moment';

function ReservationDetail() {
  const [selectDate, setSelectDate] = useState(new Date());
  const [totalSelct, setTotalSelect] = useState();
  const options = [
    { value: 1, label: '1매' },
    { value: 2, label: '2매' },
    { value: 3, label: '3매' },
    { value: 4, label: '4매' },
    { value: 5, label: '5매' },
    { value: 6, label: '6매' },
    { value: 7, label: '7매' },
    { value: 8, label: '8매' },
    { value: 9, label: '9매' },
  ];
  return (
    <Wrapper>
      <Title>뮤지컬 [시라노]</Title>
      <SubInfo>예술의 전당 CJ 토월 극장 | 2024.12.03 ~ 2025.02.23</SubInfo>

      <ReservationBox>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Title>관람일</Title>
            <CustomCalendar
              onChange={(value: Date) => {
                setSelectDate(value);
              }}
              formatDay={(locale, date) => moment(date).format('D')}
            />
          </Box>

          <Box>
            <Title>관람 인원 선택</Title>
            <CntInfo style={{ marginTop: '2rem' }}>
              {moment(selectDate).format('YYYY년 MM월 DD일')}
            </CntInfo>
            <CntInfo>오후 6시 00분 공연</CntInfo>
            <CntInfo>잔여 좌석 : 6석</CntInfo>
            <CustomSelect
              options={options}
              onChange={(e) => {
                setTotalSelect(e.value);
              }}
            />
            <TotalInfo>
              <InfoWrapper>
                <Label>선택된 좌석 수</Label>
                <Value>{totalSelct}석</Value>
              </InfoWrapper>

              <InfoWrapper>
                <Label>결제 금액</Label>
                <Value>150,000원</Value>
              </InfoWrapper>
            </TotalInfo>
          </Box>
        </div>

        <ButtonBox>
          <Button>예약하기</Button>
        </ButtonBox>
      </ReservationBox>
    </Wrapper>
  );
}

export default ReservationDetail;
