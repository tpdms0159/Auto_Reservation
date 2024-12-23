import ProductDetail from 'components/ProductDetail/ProductDetail';
import ReservationDetail from 'components/ReservationDetail/ReservationDetail';
import React, { useState } from 'react';

function Reservation() {
  const [state] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {state ? <ProductDetail /> : <ReservationDetail />}
    </div>
  );
}

export default Reservation;
