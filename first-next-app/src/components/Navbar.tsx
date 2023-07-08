import Link from 'next/link';
import { ReactElement } from 'react';

const Navbar = (): ReactElement => {
  return (
    <>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/contact'>Contact</Link>
      <br />
      <Link href='/blog'>Blog</Link>
    </>
  );
};

export default Navbar;
