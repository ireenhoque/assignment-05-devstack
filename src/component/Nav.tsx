import Logo from './../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="border-b border-gray-200">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center'>
                <img src={Logo} alt="" />

                <ul className='flex gap-10'>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                </ul>

                <div className='flex gap-4'>
                <button>Sign In</button>
                <button className='bg-[#D91B7E] text-white px-4 py-2 rounded-3xl'>Sign Up</button>
                </div>
            </div>
        
      </nav>
    );
};

export default Nav;