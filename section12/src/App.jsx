import "./App.css"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx"
import Edit from "./pages/Edit.jsx";
import NotFound from "./pages/NotFound.jsx";
import {createContext, useReducer, useRef} from "react";

const mockData = [
    {
        id: 1,
        createDate: new Date("2024-09-22").getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createDate: new Date("2024-09-21").getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    },
    {
        id: 3,
        createDate: new Date("2024-08-02").getTime(),
        emotionId: 3,
        content: "3번 일기 내용"
    }
]


function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(4); // 생성될 id 값을 관리하는 hook

    // 새로운 일기 추가 (차후 이 메서드만 전달한다)
    const onCreate = (createDate, emotionId, context) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createDate: createDate,
                emotionId: emotionId,
                context: context,
            },
        })
    }

    // 기존 일기 수정
    const onUpdate = (id, createDate, emotionId, context) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createDate, emotionId, context
            }
        })
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        })
    }


    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<New/>}/>
                    <Route path="/diary/:id" element={<Diary/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;
