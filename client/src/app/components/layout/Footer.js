import React from 'react';

const Footer = () => {
    return (
        <footer className="px-10 fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 box-border flex justify-between items-center">
            <div className="flex flex-col items-start gap-12">
                <div className='flex flex-col'>
                    <h1 className="text-black text-lg font-semibold font-poppins p-y" style={{ color: '#030303', fontSize: '20px', lineHeight: '30px' }}>EventMast</h1>
                    <p className="text-black text-sm font-normal font-poppins" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px' }}>Your Ultimate Event Experience Since 1997!</p>
                </div>
                <p className="text-black text-sm font-normal font-poppins" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px' }}>Uizard © 2022</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-black text-sm font-normal font-poppins mb-2" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>Help</p>
                <p className="text-black text-sm font-normal font-poppins mb-2" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>FAQs</p>
                <p className="text-black text-sm font-normal font-poppins mb-2" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>Customer</p>
                <p className="text-black text-sm font-normal font-poppins mb-2" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>How it works</p>
                <p className="text-black text-sm font-normal font-poppins" style={{ color: '#030303', fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>Contact us</p>
            </div>
        </footer>
    );
};

export default Footer;
