import React from 'react';
import FooterImage from './../assets/logo-text.png';

const Footer = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-0 border-[#dce1e9]'>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                <div>
                    <img src={FooterImage} alt="Footer Logo" />
                    <p className="max-w-sm text-sm leading-6 text-[#64748B]">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <ul className='flex gap-4 font-semibold'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold'>PRODUCT</h4>
                    <ul className= 'text-[#64748B]'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold'>COMPANY</h4>
                    <ul className= 'text-[#64748B]'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold'>LEGAL</h4>
                    <ul className= 'text-[#64748B]'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#dce1e9] pt-4 text-center sm:flex-row">
                <p className="text-sm text-[#64748B]">
                    © 2026 DevStack. All rights reserved.
                </p>

                <ul className="flex justify-center gap-4 text-sm text-[#64748B]">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;