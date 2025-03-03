import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ömer Can Karadağ</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>software developer</HighlightAlt> with experience in{" "}
        <HighlightAlt>frontend development using React</HighlightAlt>,{" "}
        <HighlightAlt>computer vision</HighlightAlt>,{" "}
        <HighlightAlt>deep learning</HighlightAlt>, and{" "}
        <HighlightAlt>embedded systems</HighlightAlt> (entry-level).
      </p>
      <p>
        I focus on building efficient web applications, exploring AI
        technologies, and working with embedded systems to create practical
        solutions.
      </p>
    </AboutWrapper>
  );
};

export default About;
