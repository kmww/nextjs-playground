import Link from 'next/link';
import { ReactElement, useContext } from 'react';
import ThemeContext from './ThemeContext';

const Navbar = (): ReactElement => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const newThemeName = theme === 'dark' ? 'light' : 'dark';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
      }}>
      <div>Next PlayGround</div>
      <div style={{ display: 'flex', gap: 5 }}>
        <Link href='/'>Home</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/blog'>Blog</Link>
        <button onClick={toggleTheme}>Set {newThemeName} theme</button>
      </div>
    </div>
  );
};

export default Navbar;
