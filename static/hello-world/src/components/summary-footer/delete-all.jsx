import React from "react";

import LoadingButton from "@atlaskit/button/loading-button";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import Icon from "../shared/icon";
import IconContainer from "../shared/icon-container";

const DeleteAll = ({
  isDeletingAll,
  isDeleteAllShowing,
  deleteAllTodos,
  setIsDeleteAllShowing,
}) =>
  isDeleteAllShowing ? (
    <LoadingButton
      appearance="danger"
      spacing="compact"
      isLoading={isDeletingAll}
      isDisabled={isDeletingAll}
      onClick={deleteAllTodos}
    >
      Delete All
    </LoadingButton>
  ) : (
    <LoadingButton
      appearance="subtle"
      spacing="none"
      onClick={() => setIsDeleteAllShowing(true)}
    >
      <IconContainer>
        <Icon>
          <TrashIcon />
        </Icon>
      </IconContainer>
    </LoadingButton>
  );

export default DeleteAll;
