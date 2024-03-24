import React from 'react';
import BlogCard from '../components/BlogCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const eventTitle0 = "AI Cartoon Generate-2024-01-18";
  const eventSubtitle0 = "Vervet Monkeys Follow Different Social 'Norms' and Respond to 'Peer Pressure,' New Long-Term Study Shows";
  const subtitleUrl0 = "https://www.sciencedaily.com/releases/2023/12/231219124416.htm";
  const altInfo0 = "AI Cartoon Generate for Vervet Monkeys Follow Different Social 'Norms' and Respond to 'Peer Pressure,' New Long-Term Study Shows";
  const eventImageUrl0 = "/blog/240118.png";

  const eventTitle1 = "AI Cartoon Generate-2024-01-17";
  const eventSubtitle1 = "Study Uncovers Major Hidden Human-Driven Bird Extinctions";
  const subtitleUrl1 = "https://www.sciencedaily.com/releases/2023/12/231219124404.htm";
  const altInfo1 = "AI Cartoon Generate for Study Uncovers Major Hidden Human-Driven Bird Extinctions";
  const eventImageUrl1 = "/blog/240117.png";

  const eventTitle2 = "AI Cartoon Generate-2024-01-16";
  const eventSubtitle2 = "Global Inventory of Sound Production Brings Us One Step Closer to Understanding Aquatic Ecosystems";
  const subtitleUrl2 = "https://phys.org/news/2023-12-global-production-closer-aquatic-ecosystems.html";
  const altInfo2 = "AI Cartoon Generate for Global Inventory of Sound Production Brings Us One Step Closer to Understanding Aquatic Ecosystems";
  const eventImageUrl2 = "/blog/240116.png";

  const eventTitle3 = "AI Cartoon Generate-2024-01-15";
  const eventSubtitle3 = "Hummingbirds' Unique Sideways Flutter Gets Them Through Small Apertures";
  const subtitleUrl3 = "https://www.eurekalert.org/multimedia/1005013";
  const altInfo3 = "AI Cartoon Generate for Hummingbirds' Unique Sideways Flutter Gets Them Through Small Apertures";
  const eventImageUrl3 = "/blog/240115.png";

  const eventTitle4 = "AI Cartoon Generate-2024-01-14";
  const eventSubtitle4 = "Five New Species of Soft-Furred Hedgehogs from Southeast Asia";
  const subtitleUrl4 = "https://www.theguardian.com/world/2023/dec/22/five-new-species-of-soft-furred-hedgehogs-discovered-in-south-east-asia";
  const altInfo4 = "AI Cartoon Generate for Five New Species of Soft-Furred Hedgehogs from Southeast Asia";
  const eventImageUrl4 = "/blog/240114.png";

  const eventTitle5 = "AI Cartoon Generate-2024-01-13";
  const eventSubtitle5 = "World's Smallest 'Fanged' Frogs Found in Indonesia";
  const subtitleUrl5 = "https://www.sciencedaily.com/releases/2023/12/231221011931.htm";
  const altInfo5 = "AI Cartoon Generate for World's Smallest 'Fanged' Frogs Found in Indonesia";
  const eventImageUrl5 = "/blog/240113.png";


  // 
  const eventTitle6 = "AI Cartoon Generate-2024-01-12";
  const eventSubtitle6 = "Male Southern Elephant Seals Are Picky Eaters";
  const subtitleUrl6 = "https://www.sciencedaily.com/releases/2024/01/240104122021.htm";
  const altInfo6 = "AI Cartoon Generate for Male Southern Elephant Seals Are Picky Eaters";
  const eventImageUrl6 = "/blog/240112.png";

  const eventTitle7 = "AI Cartoon Generate-2024-01-11";
  const eventSubtitle7 = "Study Overturns Conventional Wisdom About Wild Turkey Nesting Survival";
  const subtitleUrl7 = "https://news.ncsu.edu/2023/12/overturning-conventional-wisdom-on-turkey-nesting/";
  const altInfo7 = "AI Cartoon Generate for Study Overturns Conventional Wisdom About Wild Turkey Nesting Survival";
  const eventImageUrl7 = "/blog/240111.png";

  const eventTitle8 = "AI Cartoon Generate-2024-01-10";
  const eventSubtitle8 = "Global Inventory of Best Areas for Rewilding European Bison";
  const subtitleUrl8 = "https://www.sciencedaily.com/releases/2023/12/231212191925.htm";
  const altInfo8 = "AI Cartoon Generate for Best Areas for Rewilding European Bison";
  const eventImageUrl8 = "/blog/240110.png";

  return (
    <div>
      <NavBar />


      <BlogCard
        title={eventTitle0}
        subtitle={eventSubtitle0}
        subtitleUrl={subtitleUrl0}
        altInfo={altInfo0}
        imageUrl={eventImageUrl0}
      />

      <BlogCard
        title={eventTitle1}
        subtitle={eventSubtitle1}
        subtitleUrl={subtitleUrl1}
        altInfo={altInfo1}
        imageUrl={eventImageUrl1}
      />

      <BlogCard
        title={eventTitle2}
        subtitle={eventSubtitle2}
        subtitleUrl={subtitleUrl2}
        altInfo={altInfo2}
        imageUrl={eventImageUrl2}
      />

      <BlogCard
        title={eventTitle3}
        subtitle={eventSubtitle3}
        subtitleUrl={subtitleUrl3}
        altInfo={altInfo3}
        imageUrl={eventImageUrl3}
      />

      <BlogCard
        title={eventTitle4}
        subtitle={eventSubtitle4}
        subtitleUrl={subtitleUrl4}
        altInfo={altInfo4}
        imageUrl={eventImageUrl4}
      />

      <BlogCard
        title={eventTitle5}
        subtitle={eventSubtitle5}
        subtitleUrl={subtitleUrl5}
        altInfo={altInfo5}
        imageUrl={eventImageUrl5}
      />

      <BlogCard
        title={eventTitle6}
        subtitle={eventSubtitle6}
        subtitleUrl={subtitleUrl6}
        altInfo={altInfo6}
        imageUrl={eventImageUrl6}
      />

      <BlogCard
        title={eventTitle7}
        subtitle={eventSubtitle7}
        subtitleUrl={subtitleUrl7}
        altInfo={altInfo7}
        imageUrl={eventImageUrl7}
      />

      <BlogCard
        title={eventTitle8}
        subtitle={eventSubtitle8}
        subtitleUrl={subtitleUrl8}
        altInfo={altInfo8}
        imageUrl={eventImageUrl8}
      />
      <Footer />
    </div>
  );


}

export default BlogPage;