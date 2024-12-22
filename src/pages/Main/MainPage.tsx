import React from 'react';
import loginImg from 'assets/login.png';
import LoginForm from 'components/LoginForm/LoginForm';

function MainPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img
        src={loginImg}
        style={{ width: '40%', height: '100%' }}
        alt="login"
      />
      <LoginForm />
    </div>
  );
}

export default MainPage;
