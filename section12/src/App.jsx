import "./App.css"
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx"
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";


function App() {
    const nav = useNavigate();
    const onClickButton = () => {
        nav("/new");
    };

    return (
        <>
            <div>
                <img src={getEmotionImage(1)}/>
                <img src={getEmotionImage(2)}/>
                <img src={getEmotionImage(3)}/>
                <img src={getEmotionImage(4)}/>
                <img src={getEmotionImage(5)}/>
            </div>

            <div>
            <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
