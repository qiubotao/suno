import React, { useState } from 'react';
import { OpenAI } from 'openai';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const TextToCartoonPage = () => {
  const { t } = useTranslation('common');

  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);


    try {
      const response = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data" + JSON.stringify(data));

      const imageUrl = data.data[0]?.url; // 安全地获取第一个元素的 URL
      console.log(imageUrl);

      setGeneratedImage(imageUrl); // 假设API返回包含图像URL的数据
    } catch (error) {
      console.error('Failed to generate cartoon', error);
      // 处理错误情况，比如显示一条错误消息
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>

      <NavBar />

      <div >
       

        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-black-800 dark:text-black lg:text-4xl">
              {t('TextToCartoon_What')}
            </h1>
            <p className="mt-6 mb-4 text-black-500 dark:text-black-300 text-left">
              {t('TextToCartoon_What_Desc')}
            </p>

            <h1 className="text-3xl font-semibold text-black-800 dark:text-black lg:text-4xl">
              {t('TextToCartoon_How')}
            </h1>
            <p className="mt-6 mb-4 text-black-500 dark:text-black-300 text-left">
              {t('TextToCartoon_How_Desc_1')}
            </p>
            <p className="mt-6 mb-4 text-black-500 dark:text-black-300 text-left">
              {t('TextToCartoon_How_Desc_2')}
            </p>
            <p className="mt-6 mb-4 text-black-500 dark:text-black-300 text-left">
              {t('TextToCartoon_How_Desc_3')}
            </p>
          </div>




          <div className="flex flex-col items-center justify-center">

          <textarea className="input input-bordered w-full max-w-lg "
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your imagination here..."
            disabled={isLoading}
          />
          <button className=" py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-50 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg " onClick={handleGenerateClick} disabled={isLoading}>
            {isLoading ?  t('Generating') : t('Generate')}
          </button>
          {generatedImage && (
            <div className="image-display">
              <img src={generatedImage} alt="Generated Cartoon" />
            </div>
          )}
          </div>
        </div>
        <style jsx>{`
   
        textarea {
          width: 80%;
          height: 100px;
          margin-bottom: 20px;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        // button {
        //   padding: 10px 20px;
        //   font-size: 18px;
        //   cursor: pointer;
        //   background-color: #0056b3;

        // }
        .image-display {
          margin-top: 20px;
        }
        img {
       max-width: 100%; 
        height: auto;  
        }
      `}</style>
      </div>
      <Footer />

    </div>
  );
};

export default TextToCartoonPage;


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}