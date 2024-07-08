import Lozenge from "@atlaskit/lozenge";

import { SummaryFooter, SummaryActions, SummaryCount } from "./styles";

import DeleteAll from "./delete-all";

const index = ({
  completedCount,
  totalTodos,
  isDeletingAll,
  isDeleteAllShowing,
  deleteAllTodos,
  setIsDeleteAllShowing,
}) => {
  return (
    <SummaryFooter>
      <SummaryCount>
        <Lozenge>
          {completedCount}/{totalTodos} Completed
        </Lozenge>
      </SummaryCount>
      <SummaryActions>
        <DeleteAll
          isDeletingAll={isDeletingAll}
          isDeleteAllShowing={isDeleteAllShowing}
          deleteAllTodos={deleteAllTodos}
          setIsDeleteAllShowing={setIsDeleteAllShowing}
        />
      </SummaryActions>
    </SummaryFooter>
  );
};

export default index;
