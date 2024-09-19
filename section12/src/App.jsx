import "./App.css"
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx"
import NotFound from "./pages/NotFound.jsx";


// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 세러운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
// 그외. NotFound 페이지


// Link vs a link: 리액트 내부에서는 Link를 사용해야한다. (a link의 경우 페이지 새로고침이 일어남)
function App() {
    const nav = useNavigate();
    const onClickButton = () => {
        nav("/new");
    };

    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
                {/*<a href="/">Home</a>*/}
                {/*<a href="/new">New</a>*/}
                {/*<a href="/diary">Diary</a>*/}
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary" element={<Diary/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
