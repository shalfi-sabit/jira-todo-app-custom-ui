import React, { Fragment } from "react";

import Button from "@atlaskit/button";
import Spinner from "@atlaskit/spinner";
import Lozenge from "@atlaskit/lozenge";
import EditorCloseIcon from "@atlaskit/icon/glyph/editor/close";
import { Checkbox } from "@atlaskit/checkbox";

import Status from "../shared/status";
import IconContainer from "../shared/icon-container";
import Icon from "../shared/icon";
import { Row } from "./styles";

const rows = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <Fragment>
      {todos.map(({ id, label, isChecked, isSaving, isDeleting }, index) => {
        const isSpinnerShowing = isSaving || isDeleting;

        return (
          <Row isChecked={isChecked} key={label + index}>
            <Checkbox
              isChecked={isChecked}
              label={label}
              name={label}
              onChange={() => toggleTodo(id)}
            />

            <Status>
              {isSpinnerShowing && <Spinner size="medium" />}
              {isChecked && <Lozenge appearance="success">Done</Lozenge>}
              <Button
                size="small"
                spacing="none"
                onClick={() => deleteTodo(id)}
              >
                <IconContainer>
                  <Icon>
                    <EditorCloseIcon />
                  </Icon>
                </IconContainer>
              </Button>
            </Status>
          </Row>
        );
      })}
    </Fragment>
  );
};

export default rows;
