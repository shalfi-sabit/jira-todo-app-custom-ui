import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

import EmptyTodos from "./components/empty-todos";
import Card from "./components/shared/card";
import Todos from "./components/todos";
import SummaryFooter from "./components/summary-footer";

function App() {
  const [todos, setTodos] = useState(null);
  const [input, setInput] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [isDeleteAllShowing, setIsDeleteAllShowing] = useState(false);
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  if (!isFetched) {
    setIsFetched(true);
    invoke("get-all").then(setTodos);
  }

  const createTodo = (label) => {
    const newTodoList = [...todos, { label, isChecked: false, isSaving: true }];
    setTodos(newTodoList);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isChecked: !todo.isChecked, isSaving: true };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDeleting: true };
        }
        return todo;
      })
    );
  };

  const deleteAllTodos = async () => {
    setIsDeletingAll(true);

    await invoke("delete-all");

    setTodos([]);
    setIsDeleteAllShowing(false);

    setIsDeletingAll(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createTodo(input);
    setInput("");
  };

  useEffect(() => {
    if (!todos) return;
    if (!todos.find((todo) => todo.isSaving || todo.isDeleting)) return;

    Promise.all(
      todos.map((todo) => {
        if (todo.isSaving && !todo.id) {
          return invoke("create", { label: todo.label, isChecked: false });
        }

        if (todo.isSaving && todo.id) {
          return invoke("update", {
            id: todo.id,
            label: todo.label,
            isChecked: todo.isChecked,
          });
        }

        if (todo.isDeleting && todo.id) {
          return invoke("delete", { id: todo.id }).then(() => false);
        }

        return todo;
      })
    )
      .then((saved) => {
        return saved.filter((todo) => todo);
      })
      .then(setTodos);
  }, [todos]);

  if (!todos) {
    return <EmptyTodos />;
  }

  const totalTodos = todos.length;
  const completedCount = todos.filter((todo) => todo.isChecked).length;

  return (
    <Card>
      <Todos
        input={input}
        setInput={setInput}
        deleteTodo={deleteTodo}
        todos={todos}
        toggleTodo={toggleTodo}
        onSubmit={onSubmit}
      />
      <SummaryFooter
        isDeletingAll={isDeletingAll}
        isDeleteAllShowing={isDeleteAllShowing}
        deleteAllTodos={deleteAllTodos}
        setIsDeleteAllShowing={setIsDeleteAllShowing}
        totalTodos={totalTodos}
        completedCount={completedCount}
      />
    </Card>
  );
}

export default App;
