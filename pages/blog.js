
import React from 'react';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Analytics } from '@vercel/analytics/react';

const Blog = () => {

  // Example blog posts data
  const blogPosts = [
    {
      title: 'What is OpenAi Sora',
      imageUrl: '/blog/sora.jpg',
      description: "In the continuous evolution of artificial intelligence, we've witnessed text generating images, machine learning improving medical diagnostics, and even AI outperforming human players in complex games. Now, OpenAI is pushing the boundaries once again with the introduction of Sora—a cutting-edge model capable of transforming text instructions into videos, marking a significant advancement in our ability to understand and simulate the dynamics of the physical world.      ",
      readMoreLink: 'WhatisSora',
    },
    {
      title: 'Top AI Video Generators: Sora vs. Pika, RunwayML, Stable Video',
      imageUrl: '/blog/compare.jpg',
      description: " OpenAI has unveiled Sora, the first text-to-video model capable of generating high-definition, fluid videos up to one minute in length. The release has stunned the world, with some even proclaiming “ the end of the Hollywood era.",
      readMoreLink: 'https://medium.com/@aagnofficial/top-ai-video-generators-sora-vs-pika-runwayml-stable-video-22c545914576',
    },
    // Add more blog posts objects similar to the above structure
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
                    
    <Navbar />
      <div className="container px-6 py-10 mx-auto">
      
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">AI SORA TECH BLOG</h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Collect the latest news about OpenAI Sora.
                    </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index}>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.imageUrl} alt="" />
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.description}</p>
              <a href={post.readMoreLink} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
              
            </div>
          ))}
        </div>
      </div>
      <Analytics />
      <Footer />
    </section>
  );
};


export default Blog;