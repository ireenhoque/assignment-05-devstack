import { useState } from 'react';
import Logo from './../assets/logo-text.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="DevStack"
                        className="w-28 sm:w-32"
                    />

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
                        <li className="text-[#DB2777]">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <button type="button">
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="rounded-3xl bg-[#D91B7E] px-4 py-2 text-white"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl lg:hidden"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-4 border-t border-gray-100 pt-4 lg:hidden">
                        <ul className="flex flex-col gap-4">
                            <li className="text-[#DB2777]">Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <div className="mt-5 flex flex-col gap-3">
                            <button
                                type="button"
                                className="w-full rounded-lg border border-gray-200 py-2"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                className="w-full rounded-lg bg-[#D91B7E] py-2 text-white"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;