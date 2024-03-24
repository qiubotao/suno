import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Analytics } from '@vercel/analytics/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ImageCartoonizePage() {

  const { t } = useTranslation('common');


  const [previewSrc, setPreviewSrc] = useState('');
  const [cartoonizedSrc, setCartoonizedSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreviewSrc(URL.createObjectURL(file));
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const handleCartoonize = async () => {
    try {
    setIsLoading(true);

    const photoInput = document.getElementById('photo-upload');
    if (photoInput.files.length === 0) {
      alert('Please select an image to upload.');
      return;
    }
    const base64Image = await convertToBase64(photoInput.files[0]);

    // const formData = new FormData();
    // formData.append('image', photoInput.files[0]);

    const response = await fetch('/api/replicateApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64Image }),
    });

    const data = await response.json();
    if (data.cartoonizedImage) {
      setCartoonizedSrc(data.cartoonizedImage);
    }
    } finally {
      setIsLoading(false);

    }
  };

  return (
    <div>
      <NavBar />



      <div className="container">


        <div className="content">
          <h1 className="title">

            {t('ImageCartoonize_What')}
          </h1>
          <p className="description">
            {t('ImageCartoonize_What_Desc')}
          </p>

          <h1 className="title">
            {t('ImageCartoonize_How')}

          </h1>
          <p className="description">
            {t('ImageCartoonize_How_Desc')}
          </p>
        </div>

        <div className="inputWrapper">
        <input type="file" id="photo-upload" accept="image/*" onChange={handleFileChange} className="inputFile" />
          <button onClick={() => document.getElementById('photo-upload').click()} className="button">
          {t('Select File')} {/* 假设 'Select File' 是翻译文件中的键 */}
          </button>

          {/* <button className="button" onClick={handleCartoonize}>卡通化</button> */}
          <button className="button" onClick={handleCartoonize} disabled={isLoading}>
          {isLoading ? t('Generating') : t('Generate')}
        </button>
        </div>

        <div className="imagePreviewContainer">
          {previewSrc && (
            <div className="imageContainer">
              <img className="image" src={previewSrc} alt="Image Cartoonize Uploaded Preview - 图片卡通化前" />
            </div>
          )}
          {cartoonizedSrc && (
            <div className="imageContainer">
              <img className="image" src={cartoonizedSrc} alt="Image Cartoonized Image - 卡通化后的图片" />
            </div>
          )}


        </div>

        <style jsx>{`
        .container {
          padding: 2rem;
          display: flex; // 使用flex布局
          flex-direction: column; // 子元素垂直排列
          align-items: center; // 子元素在横轴居中
          text-align: center;
        }
      
        .inputWrapper {
          width: 100%; // 宽度为100%
          margin-top: 2rem; // 上传组件与图片预览间距
          display: flex; // 使用flex布局
          flex-direction: column; // 子元素垂直排列
          align-items: center; // 子元素在横轴居中
        }
      
        .button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 0.8rem 1.6rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 1rem; // 为按钮添加上边距
        }
      
        .button:hover {
          background-color: #0056b3;
        }
      
        .imagePreviewContainer {
          width: 100%; // 宽度调整为100%
          display: flex;
          justify-content: center; // 图片容器居中显示
          margin-top: 1rem;
        }
      
        .imageContainer {
          width: 45%; // 图像容器宽度自适应内容
          padding: 1rem;
          display: flex; // 使图片在这个容器中居中
          align-items: center; // 垂直居中
          justify-content: center; // 水平居中
          overflow: hidden; // 如果图片太大，隐藏溢出的部分
        }
        
        .image {
          max-width: 100%;
          max-height: 100%; // 限制图片的最大高度
          object-fit: cover; // 裁剪并填充容器，保持宽高比
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px;
        }
      
        .content {
          width: 60%; // 内容宽度，根据实际需要进行调整
          margin-top: 2rem; // 内容与图片预览的间距
          text-align: left; // 内容左对齐
        }
      
        .title {
          font-size: 2rem;
          color: #333;
        }
      
        .description {
          font-size: 1rem;
          color: #666;
        }
        
        .inputFile {
          display: none;
        }
      `}</style>
      </div>
      <Footer />

    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}