import React, { useState } from 'react';
import { OpenAI } from 'openai';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';


import VideoCard from '../components/VideoCard';

const SoraCollections = () => {
    const { t } = useTranslation('common');
    // 假设这是你的视频卡片数据数组
    const cards = [
        {
            videoUrl: "tokyo-walk.mp4",
            title: "tokyo walk ",
            description: "Prompt: A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.    ",
        },
        {
            videoUrl: "mitten-astronaut.mp4",
            title: "mitten astronaut",
            description: "Prompt: A movie trailer featuring the adventures of the 30 year old space man wearing a red wool knitted motorcycle helmet, blue sky, salt desert, cinematic style, shot on 35mm film, vivid colors.    ",
        },
        {
            videoUrl: "big-sur.mp4",
            title: "Big Sur",
            description: "Prompt: Drone view of waves crashing against the rugged cliffs along Big Sur’s garay point beach. The crashing blue waters create white-tipped waves, while the golden light of the setting sun illuminates the rocky shore. A small island with a lighthouse sits in the distance, and green shrubbery covers the cliff’s edge. The steep drop from the road down to the beach is a dramatic feat, with the cliff’s edges jutting out over the sea. This is a view that captures the raw beauty of the coast and the rugged landscape of the Pacific Coast Highway.",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/monster-with-melting-candle.mp4",
            title: "monster with melting candle",
            description: "Prompt: Animated scene features a close-up of a short fluffy monster kneeling beside a melting red candle. The art style is 3D and realistic, with a focus on lighting and texture. The mood of the painting is one of wonder and curiosity, as the monster gazes at the flame with wide eyes and open mouth. Its pose and expression convey a sense of innocence and playfulness, as if it is exploring the world around it for the first time. The use of warm colors and dramatic lighting further enhances the cozy atmosphere of the image.            ",
        },


        // 可以添加更多卡片数据...

        {
            videoUrl: "https://cdn.openai.com/sora/videos/origami-undersea.mp4",
            title: "origami undersea",
            description: "Prompt: A gorgeously rendered papercraft world of a coral reef, rife with colorful fish and sea creatures.            ",
        },

        {
            videoUrl: "https://cdn.openai.com/sora/videos/victoria-crowned-pigeon.mp4",
            title: "victoria crowned pigeon",
            description: "Prompt: This close-up shot of a Victoria crowned pigeon showcases its striking blue plumage and red chest. Its crest is made of delicate, lacy feathers, while its eye is a striking red color. The bird’s head is tilted slightly to the side, giving the impression of it looking regal and majestic. The background is blurred, drawing attention to the bird’s striking appearance.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/ships-in-coffee.mp4",
            title: "ships in coffee",
            description: "Prompt: Photorealistic closeup video of two pirate ships battling each other as they sail inside a cup of coffee.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/man-on-the-cloud.mp4",
            title: "man on the cloud",
            description: "Prompt: A young man at his 20s is sitting on a piece of cloud in the sky, reading a book.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/gold-rush.mp4",
            title: "gold rush",
            description: "Prompt: Historical footage of California during the gold rush.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4",
            title: "zen garden gnome",
            description: "Prompt: A close up view of a glass sphere that has a zen garden within it. There is a small dwarf in the sphere who is raking the zen garden and creating patterns in the sand.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/closeup-of-womans-eye.mp4",
            title: "closeup of womans eye",
            description: "Prompt: Extreme close up of a 24 year old woman’s eye blinking, standing in Marrakech during magic hour, cinematic film shot in 70mm, depth of field, vivid colors, cinematic            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/dancing-kangaroo.mp4",
            title: "dancing kangaroo",
            description: "Prompt: A cartoon kangaroo disco dances.",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/lagos.mp4",
            title: "lagos",
            description: "Prompt: A beautiful homemade video showing the people of Lagos, Nigeria in the year 2056. Shot with a mobile phone camera.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/petri-dish-pandas.mp4",
            title: "petri dish pandas",
            description: "Prompt: A petri dish with a bamboo forest growing within it that has tiny red pandas running around.            ",
        },
        {
            videoUrl: "https://cdn.openai.com/sora/videos/stack-of-tvs.mp4",
            title: "stack of tvs",
            description: "Prompt: The camera rotates around a large stack of vintage televisions all showing different programs — 1950s sci-fi movies, horror movies, news, static, a 1970s sitcom, etc, set inside a large New York museum gallery.            ",
        },
    ];


    return (
        <div>
            <NavBar />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">AI SORA VIDEO COLLECTIONS </h1>
                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Discover the latest and most exciting Sora prompts and videos
                        </p>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {cards.map((card, index) => (
                                <VideoCard key={index} videoUrl={card.videoUrl} title={card.title} description={card.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Analytics />

            <Footer />

        </div>
    );

};

export default SoraCollections;


export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home'])),
        },
    };
}