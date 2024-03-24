import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import LanguageSwitcher from './LanguageSwitcher';

import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // 创建script元素
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'qiubertoltn');
    script.setAttribute('data-color', '#FFDD00');
    script.setAttribute('data-emoji', '☕');
    script.setAttribute('data-font', 'Cookie');
    script.setAttribute('data-text', 'Buy me a coffee');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#000000');
    script.setAttribute('data-coffee-color', '#ffffff');

    // 将script元素添加到document的body中
    document.body.appendChild(script);

    // 组件卸载时移除script元素
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#">
              <span className="flex-shrink-0 cursor-pointer ">
                <Image src="/logo.png" alt="AI Cartoon Logo" width={48} height={24} ></Image>

              </span>
            </Link>
            <div className='pl-4'> Suno AI Tech</div>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {/* Menu Icon */}
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>




          {/* Mobile Menu */}

          <div className={`${isMenuOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
          
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">

              <Link href="/"><span className="px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Home')}</span></Link>
              <Link href="/Suno"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Playground')}</span></Link>
              {/* <Link href="/blog"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Blog')}</span></Link> */}
              {/* <Link href="/ImageCartoonizePage"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Image Cartoonize')}</span></Link> */}
              {/* <Link href="/SoraCollections"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('SoraCollections')}</span></Link> */}
              {/* <Link href="/TermsAndConditionsPage"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Terms And Conditions')}</span></Link> */}
              {/* <Link href="/PrivacyPolicyPage"><span className="px-3 py-2 mx-3 mt-2 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{t('Privacy Policy')}</span></Link> */}
              {/* Buy Me A Coffee按钮 */}
              {/* <div className="mt-4 lg:mt-0">
                <a href="https://www.buymeacoffee.com/qiubertoltn" target="_blank" rel="noopener noreferrer" >
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '35px', width: '140px',marginRight:'6px' }} />
                </a>
              </div> */}
              {/* <LanguageSwitcher /> */}
            </div>


          </div>
        </div>
      </div>
    </nav>
  );
};







export default Navbar;
