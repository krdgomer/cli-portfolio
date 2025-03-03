import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + "krdg.omercan@hotmail.com", "_self");
  }

  return (
    <Wrapper>
      <span>krdg.omercan@hotmail.com</span>
    </Wrapper>
  );
};

export default Email;
