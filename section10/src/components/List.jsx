import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
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

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출");
  //   const totalCount = todos.length;
  //   const doneConunt = todos.filter((todo) => todo.isDone).length;
  //   const noDoneCount = totalCount - doneConunt;
  //   return {
  //     totalCount,
  //     doneConunt,
  //     noDoneCount,
  //   };
  // };

  //useMemo: 두번째인자(todos)가 바뀌었을때 동작한다
  const { totalCount, doneConunt, noDoneCount } = useMemo(() => {
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
  // 두번째 인자가 의존성배열: deps

  // const { totalCount, doneConunt, noDoneCount } = getAnalyzedData();

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
