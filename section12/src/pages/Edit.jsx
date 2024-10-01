import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";


const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            // 일기 삭제
            onDelete(params.id);
            nav('/', {replace: true});  // 홈으로 이동 시키면서 뒤로가기 금지
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(
                params.id,
                input.createDate.getTime(),
                input.emotionId,
                input.content);
        };
        nav('/', {replace: true});
    }

    return (
        <div>
            <Header title={"일기 수정하기"}
                    leftChild={
                        <Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>
                    }
                    rightChild={
                        <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>
                    }
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    );
}

export default Edit;