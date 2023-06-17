import { ReactNode } from 'react';
import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

type TextBoxProps = {
  title: String;
  subtitle?: String;
  text: Array<String>;
  theme: String;
  children?: ReactNode;
};

const Box = styled.div`
  background-color: var(
    ${(props) => (props.theme === 'dark' ? '--black' : '--primary')}
  );
  color: var(${(props) => (props.theme === 'dark' ? '--white' : '--black')});

  > div {
    ${basePadding}
    padding-top: 4rem;
    padding-bottom: 4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  p {
    font-size: 1.5rem;
  }
`;

const Title = styled.div`
  h1 {
    color: var(
      ${(props) => (props.theme === 'dark' ? '--primary' : '--black')}
    );
    margin-bottom: 10px;
  }
  margin-bottom: 4%;
`;

const Text = styled.div`
  p {
    text-indent: 0.5rem;
    line-height: 2.2rem;
  }
`;

const TextBox = ({ title, subtitle, text, theme, children }: TextBoxProps) => {
  return (
    <Box theme={theme}>
      <div>
        <Title theme={theme}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Title>
        <Text>
          {text.map((line) => (
            <p>{line}</p>
          ))}
        </Text>
        {children}
      </div>
    </Box>
  );
};

export default TextBox;
