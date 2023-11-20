import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    login(formJson.email, formJson.password);
  };
  const login = async (username, password) => {
    // const basicToken = 'Basic ' + window.btoa(username + ':' + password);
    // console.log(basicToken);
    try {
      const url = 'http://localhost:8080/authenticate';
      const response = await axios.post(url, {
        // headers: { Authorization: basicToken },
        username,
        password,
      });

      console.log(response.data); // 서버에서 전달한 응답 처리
    } catch (error) {
      // console.log(error.response.status, error.message);
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
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

        <button type='submit'>로그인</button>
        <Link to={'/register'}>회원가입</Link>
      </form>
    </div>
  );
}

export default Login;
