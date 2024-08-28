import React, { useState } from "react"; // React import
import './Main.css'; // Main.css 파일을 import
import { Button, TextField } from '@mui/material'; // Material-UI Button, TextField import

function Grop() {
    return (
        <div className="Card1">
            <div className="c1image">
                <img className="phoneImage" alt="Group" src="img/Group.png" />
            </div>
        </div>
    );
} 

function App() {
    return (
        <div>
            <h1 className="large-text">
                우리 팀 경기를<br />
                알아서 챙겨주는,
            </h1>
            <Grop /> {/* Grop 컴포넌트를 호출하여 렌더링 */}
            <Login /> {/* Login 컴포넌트를 호출하여 렌더링 */}
        </div>
    );
}

function Login() {
    const [username, setUsername] = useState(""); // 사용자 이름 상태
    const [password, setPassword] = useState(""); // 비밀번호 상태

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        // 로그인 처리 로직 추가
        console.log("로그인 시도:", { username, password });
    };

    return (
        <div className="login-container"> {/* 가운데 정렬을 위한 클래스 추가 */}
            <form onSubmit={handleSubmit} className="login-form">
                <TextField 
                    label="아이디를 입력해주세요" 
                    variant="outlined" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    fullWidth 
                    margin="dense" // 마진을 "dense"로 설정하여 간격을 좁힘
                />
                <TextField 
                    label="비밀번호를 입력해주세요" 
                    type="password" 
                    variant="outlined" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    fullWidth 
                    margin="dense" // 마진을 "dense"로 설정하여 간격을 좁힘
                />
                <Button 
                    variant="contained" 
                    className="login-button" // CSS 클래스 추가
                    type="submit"
                >
                    확인
                </Button>
            </form>
            <Text /> {/* Text 컴포넌트를 호출하여 렌더링 */}
            <Login2 /> {/* 간편 로그인 컴포넌트 추가 */}
            <LoginPic /> {/* LoginPic 컴포넌트를 호출하여 렌더링 */}
        </div>
    );
}

function Text() {
    return (
        <div className="text1">
            <h5>아이디 찾기 | 비밀번호 찾기 | 회원가입</h5>
        </div>
    );
}

function Login2() {
    return (
        <div className="login2">
            <h5>간편 로그인</h5>
        </div>
    );
}

function LoginPic() {
    return (
        <div className="loginPic">
            <div className="google">
                <img className="googleImg" alt="Google 로그인" src="img/google.png" />
            </div>
            <div className="kakao">
                <img className="kakaoImg" alt="kakao 로그인" src="img/kakao.png" />
            </div>
            <div className="naver">
                <img className="naverImg" alt="naver 로그인" src="img/naver.png" />
            </div>

        </div>
    );
}

export default App; // App 컴포넌트를 기본 내보내기로 설정
export { Grop }; // Grop 컴포넌트를 명명된 내보내기로 설정
export { Login }; // Login 컴포넌트를 명명된 내보내기로 설정
export { Text }; // Text 컴포넌트를 명명된 내보내기로 설정
export { Login2 }; // 간편 로그인 컴포넌트를 명명된 내보내기로 설정
export { LoginPic }; // LoginPic 컴포넌트를 명명된 내보내기로 설정
