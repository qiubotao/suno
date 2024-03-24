// pages/_app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import Router from 'next/router';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9541783301891734"
          crossOrigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Google Analytics 脚本 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RG2M8T1Y3L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RG2M8T1Y3L');
      `,
          }}
        />


        {/* 这里可以放置全局的广告 HTML 代码或其他头部信息 */}
        <title>SUNO AI TECH</title>
        <meta name="description" content="Suno" />
        <meta name="keywords" content="SUNO, Song Generation, Text to Music, Content Creation, Music Technology" />
        {/* 其他全局的标签 */}


        {/* 其他元标签 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}


export default appWithTranslation(MyApp);
