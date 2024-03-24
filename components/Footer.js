import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* <div className="flex justify-center items-end mt-20 mb-5">
        <a href="https://www.producthunt.com/posts/ai-sora-tech?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai-sora-tech" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440120&theme=light" alt="ai sora tech - use open ai sora transform text to video | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
        </a>
      </div> */}
      <p>&copy; {new Date().getFullYear()} AI Sora Tech</p>
      <p><a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a></p>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 20px;
          font-size: 0.8em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;