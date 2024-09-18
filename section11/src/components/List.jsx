import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo} from "react";
import {useContext} from "react";
import {TodoStateContext, TodoDispatchContext} from "../App.jsx";

const List = () => {
    const todos = useContext(TodoStateContext);
    const {onUpdate, onDelete} = useContext(TodoDispatchContext)
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilterdDate = () => {
        if (search === "") {
            return todos;
        } else {
            return todos.filter((todo) =>
                todo.content.toLowerCase().includes(search.toLowerCase())
            );
        }
    };

    const filterdTodos = getFilterdDate();

    const {totalCount, doneConunt, noDoneCount} = useMemo(() => {
        console.log("getAnalyzedData 호출");
        const totalCount = todos.length;
        const doneConunt = todos.filter((todo) => todo.isDone).length;
        const noDoneCount = totalCount - doneConunt;
        return {
            totalCount,
            doneConunt,
            noDoneCount,
        };
    }, [todos]);

    return (
        <div className="List">
            <h4>Todo List🏆</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneConunt}</div>
            <div>notDone: {noDoneCount}</div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filterdTodos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;
