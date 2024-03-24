import React, { useState } from 'react';
import { OpenAI } from 'openai';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const ImageCartoonizePage3 = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);
    console.log("ImageCartoonizePage");

    try {
      const response = await fetch('/api/huggingface', {
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

        // 使用 Base64 编码的图像数据
      const imageBase64 = data.image; // 直接使用返回的 Base64 编码的图像数据
      console.log(" imageBase64 ");

      setGeneratedImage(imageBase64); // 设置 Base64 编码的图像字符串
      // const imageUrl = data.data[0]?.url; // 安全地获取第一个元素的 URL
      // console.log(imageUrl);

      // setGeneratedImage(imageUrl); // 假设API返回包含图像URL的数据
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

      <div className="container">
        <div>prompt words:
          <p>a cartoon cat</p>
        </div>

        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your imagination here..."
          disabled={isLoading}
        />
        <button onClick={handleGenerateClick} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
        {generatedImage && (
          <div className="image-display">
            <img src={generatedImage} alt="Generated Cartoon" />
          </div>
        )}
        <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px;
        }
        textarea {
          width: 80%;
          height: 100px;
          margin-bottom: 20px;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px 20px;
          font-size: 18px;
          cursor: pointer;
        }
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

export default ImageCartoonizePage3;

// // components/CartoonizeForm.js 或 pages/index.js
// import axios from 'axios';
// import { useState } from 'react';

// const ImageCartoonizePage = () => {
//   const [imageFile, setImageFile] = useState(null);
//   const [maskFile, setMaskFile] = useState(null);
//   const [prompt, setPrompt] = useState('');

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleMaskChange = (e) => {
//     setMaskFile(e.target.files[0]);
//   };

//   const handlePromptChange = (e) => {
//     setPrompt(e.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image', imageFile);
//     formData.append('mask', maskFile);
//     formData.append('prompt', prompt);

//     const response = await fetch('/api/cartoonize', {
//       method: 'POST',
//       body: formData,
//     });

//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleImageChange} required />
//       <input type="file" onChange={handleMaskChange} required />
//       <input type="text" value={prompt} onChange={handlePromptChange} required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ImageCartoonizePage;
