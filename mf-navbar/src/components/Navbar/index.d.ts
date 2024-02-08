import { NavLinkProps } from 'react-router-dom';

interface NavbarProps {
  isActive: boolean;
}

declare const Navbar: React.FC<NavbarProps>;

export default Navbar;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nav-link': NavLinkProps & { isActive?: boolean };
    }
  }
}