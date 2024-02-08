import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarProps } from './props';

const Navbar: React.FC = () => {
    const activeClass = ({ isActive }: NavbarProps) =>
        `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`;

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/" className="text-gray-200 font-bold">MedCof</NavLink>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink to="/" className={activeClass}>Home</NavLink>
                                <NavLink to="/about" className={activeClass}>Sobre</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <NavLink to="/" className={activeClass}>Home</NavLink>
                    <NavLink to="/about" className={activeClass}>Sobre</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;