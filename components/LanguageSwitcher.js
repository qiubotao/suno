import React from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <select onChange={changeLanguage} defaultValue={router.locale} className="language-select">
        <option value="en">English</option>
        <option value="zh">中文</option>
        {/* 添加其他语言选项 */}
      </select>
      <style jsx>{`
        .language-select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: white;
          font-size: 1rem;
          cursor: pointer;
        }

        @media (max-width: 100px) {
          .language-select {
            padding: 15px; /* 在移动设备上增加填充，使得更易于触摸 */
            font-size: 16px; /* 增加字体大小，提高可读性 */
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSwitcher;
