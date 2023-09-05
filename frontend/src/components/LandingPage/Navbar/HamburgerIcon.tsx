import hamburger_menu from '../../../public/icons/haburger_menu.svg';
import { useState } from 'react';
import MobileSidebar from './MobileSidebar';

export default function HamburgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sm:hidden'>
      <img 
        src={hamburger_menu} 
        alt="Hamburger icon" 
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <MobileSidebar />}
    </div>
  );
}