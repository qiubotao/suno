import React, { useState } from 'react';
import { OpenAI } from 'openai';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';


const Sora = () => {
    const { t } = useTranslation('common');

    const [inputText, setInputText] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState(''); // 添加状态来保存视频URL

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleGenerateClick = async () => {
        setIsLoading(true);


        try {
            console.log('inputText' + inputText);
            const response = await fetch('/api/soraTranslate', {
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
            console.log(data);
            // 假设返回的数据中包含视频的URL
            if (data.videoUrl) {
                setVideoUrl(data.videoUrl); // 保存视频URL以供显示
            }


        } catch (error) {
            console.error('Failed to generate cartoon', error);
            // 处理错误情况，比如显示一条错误消息
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
        <Head>
        {/* <link rel="canonical" href="https://abc.com/" /> */}
    </Head>
    <NavBar />
        <div>
      <iframe
        src="https://suno-bark.hf.space/"
        height="900px"
        width="100%"
        title="Iframe Example"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    );
};

export default Sora;


export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home'])),
        },
    };
}