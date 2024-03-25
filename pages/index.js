import Image from 'next/image';
// import playIcon from 'path/to/Play.svg'; // 确保替换为正确的导入路径
// import rectangleImage from 'path/to/Rectangle777.png'; // 确保替换为正确的导入路径
import React from 'react';
import VideoCard from '../components/VideoCard';
import FaqSection from '../components/Faq';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Navbar from '../components/NavBar';
import Head from 'next/head';


export default function HomeSection() {
  // 假设这是你的视频卡片数据数组
  const cards = [
    {
      videoUrl: "http://www.youtube.com/watch?v=gEwM6VX1ZCM",
      title: "AI lyric and composition tool： Suno",
      description: "",
    },
    {
      videoUrl: "http://www.bilibili.com/video/BV1fK42187TZ/?spm_id_from=333.337.search-card.all.click&vd_source=f268f389e0e0c662588fe51a6ceb4d99",
      title: "The advanced tutorial of Suno AI",
      description: "",
    },
    {
      videoUrl: "http://search.bilibili.com/all?keyword=suno+%E9%9F%B3%E4%B9%90%E4%BA%BA&from_source=webtop_search&spm_id_from=333.788&search_source=5&order=click",
      title: "How do musicians view Suno?",
      description: "",
    },
    // 可以添加更多卡片数据...
  ];
  return (
    <section>
      <Head>
        <link rel="canonical" href="https://sunoai.tech/" />
      </Head>
      <Navbar />
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-start px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="lg:max-w-[80%]">
          <h1 className="mb-5 text-4xl font-semibold md:text-8xl lg:mb-8">Suno AI Tech</h1>
          {/* <p className="mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8"></p> */}
        </div>
        <div className="flex">
          <a href="Suno" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Get Started</a>
          <a href="/" className="flex flex-row items-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
            {/* <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" /> */}
            <p className="text-black">View Showreel</p>
          </a>
        </div>
        <a href="#" className="relative bottom-0 left-auto right-0 top-auto mt-20 inline-block h-[480px] w-full font-bold text-[#1353fe] lg:absolute lg:h-64 lg:w-64">
          {/* <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390645323b5307a9e8e2aaa_Rectangle%20777.png" alt="" className="relative bottom-0 left-auto right-0 top-auto inline-block h-full w-full -rotate-3 rounded-xl object-cover lg:-rotate-6" /> */}
          <div className="absolute inset-0 z-10 h-full -rotate-6 rounded-xl bg-[#00000033] lg:-rotate-3"></div>
          <div className="absolute inset-0 -z-10 h-full rounded-2xl bg-black"></div>
          {/* <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63914ea79e127d1bd7939a6a_Play.svg" alt="" className="absolute bottom-1/2 left-1/2 right-auto top-auto z-10 inline-block -translate-x-1/2 translate-y-1/2" /> */}
        </a>
        {/* <a href="https://www.producthunt.com/posts/ai-sora-tech?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai-sora-tech" target="_blank" className='mt-20'>
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440120&theme=light" alt="ai sora tech - use open ai sora transform text to video | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
        </a> */}
      </div>



      <Image src="/pattern-1.svg" width={600} height={600} alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
      <Image src="/pattern-2.svg" width={600} height={600} alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden" />


      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <VideoCard key={index} videoUrl={card.videoUrl} title={card.title} description={card.description} />
          ))}
        </div>
        {/* <a href="SoraCollections" className="mt-5 flex mr-5 inline-block rounded-xl bg-black px-20 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">
          Read More

        </a> */}

      </div>

      <Analytics />
      {/* <FaqSection /> */}

      <Footer />
    </section>




  );
}


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}