import React from "react";

import TextField from "@atlaskit/textfield";

import Rows from "./rows";
import { Row, Form } from "./styles";
import ScrollContainer from "../shared/scroll-container";

const Todos = ({
  input,
  setInput,
  todos,
  toggleTodo,
  deleteTodo,
  onSubmit,
}) => {
  return (
    <ScrollContainer>
      <Rows deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
      <Row isCompact>
        <Form onSubmit={onSubmit}>
          <TextField
            appearance="subtle"
            placeholder="Add a todo +"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
        </Form>
      </Row>
    </ScrollContainer>
  );
};

export default Todos;
