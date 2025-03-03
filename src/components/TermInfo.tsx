import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>localhost</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
