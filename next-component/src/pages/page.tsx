import { NextPage } from 'next';
import styled from 'styled-components';

interface ButtonProps {
  color: string;
  backgroundColor: string;
}

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`;

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Badge>Hello Badge</Badge>
      <Button backgroundColor='transparent' color='#FF0000'>
        Hello
      </Button>
      <Button backgroundColor='#1E90FF' color='#FFFFFF'>
        Button
      </Button>
    </div>
  );
};

export default Page;
