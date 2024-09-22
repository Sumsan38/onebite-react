import "./App.css"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx"
import Edit from "./pages/Edit.jsx";
import NotFound from "./pages/NotFound.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import {useReducer} from "react";

const mockData = [
    {
        id: 1,
        createDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    }
]

function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, [mockData]);

    return (
        <>
            <Header title={"Header"} leftChild={<Button text={"left"}/>} rightChild={<Button text={"right"}/>}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
