import "./App.css"
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx"
import NotFound from "./pages/NotFound.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";


function App() {
    return (
        <>
            <Header title={"Header"} leftChild={<Button text={"left"}/>} rightChild={<Button text={"right"}/>}/>
            <Button text={"기본"} onClick={() => {
                console.log("clicked");
            }}/>
            <Button text={"긍정"} type={"POSITIVE"} onClick={() => {
                console.log("clicked");
            }}/>
            <Button text={"부정"} type={"NEGATIVE"} onClick={() => {
                console.log("clicked");
            }}/>
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
