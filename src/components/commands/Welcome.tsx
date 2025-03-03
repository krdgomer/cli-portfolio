import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

   /$ /$                                     /$$   /$$                                    /$$                    
  |_/|_/                                    | $$  /$$/                                   | $$                    
  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$ | $$ /$$/   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$ 
 /$$__  $$| $$_  $$_  $$ /$$__  $$ /$$__  $$| $$$$$/   |____  $$ /$$__  $$|____  $$ /$$__  $$ |____  $$ /$$__  $$
| $$  \\ $$| $$ \\ $$ \\ $$| $$$$$$$$| $$  \\__/| $$  $$    /$$$$$$$| $$  \\__/ /$$$$$$$| $$  | $$  /$$$$$$$| $$  \\ $$
| $$  | $$| $$ | $$ | $$| $$_____/| $$      | $$\\  $$  /$$__  $$| $$      /$$__  $$| $$  | $$ /$$__  $$| $$  | $$
|  $$$$$$/| $$ | $$ | $$|  $$$$$$$| $$      | $$ \\  $$|  $$$$$$$| $$     |  $$$$$$$|  $$$$$$$|  $$$$$$$|  $$$$$$$
 \\______/ |__/ |__/ |__/ \\_______/|__/      |__/  \\__/\\_______/|__/      \\_______/ \\_______/ \\_______/ \\____  $$
                                                                                                        /$$  \\ $$
                                                                                                       |  $$$$$$/
                                                                                                        \\______/ 

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
   / __/__ _/ /_         
  _\\ \\/ _ \`/ __/         
 /___/\\_,_/\\__/          
    _  __     _          
   / |/ /__ _(_)__  ___ _
  /    / _ \`/ / _ \\/ _ \`/
 /_/|_/\\_,_/_/_//_/\\_, / 
                  /___/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my command line portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/krdgomer/cli-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section"></div>
    </HeroContainer>
  );
};

export default Welcome;
