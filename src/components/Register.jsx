import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const url = 'http://localhost:8080/api/member';
    await axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log('create memeber id', response.data);
        }
      })
      .catch((error) => console.log(error));
    // Or you can work with it as a plain object:
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email을 입력하세요.'
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
          />
        </div>
        <div>
          <input type='text' name='name' placeholder='사용자명을 입력하세요' />
        </div>
        <button>회원가입</button>
        <Link to={'/login'}>로그인</Link>
      </form>
    </div>
  );
}
