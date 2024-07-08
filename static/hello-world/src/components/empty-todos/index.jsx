import Card from "../shared/card";
import { LoadingContainer } from "./styles";
import Spinner from "@atlaskit/spinner";

const index = () => {
  return (
    <Card>
      <LoadingContainer>
        <Spinner size="large" />
      </LoadingContainer>
    </Card>
  );
};

export default index;
