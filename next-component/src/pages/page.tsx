import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  color: string;
  backgroundColor: string;
}

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

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

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
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
      <StyledLink href='/'>Go to home</StyledLink>
    </div>
  );
};

export default Page;
