import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';


const TermsAndConditionsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <div className="content">
          <h2>Introduction</h2>
          <p>Welcome to <Link href="/">https://www.aisoratech.com/</Link> (“Website”). This Website is owned and operated by aismartimage. By accessing our Website, you agree to these Terms and Conditions. If you do not agree to all of these Terms and Conditions, do not use this Website.</p>

          <h2>Intellectual Property Rights</h2>
          <p>The content on our Website, including text, graphics, images, and other material, is owned by aismartimage or used with permission. No material from this Website may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without our prior written permission.</p>

          <h2>Use of the Website</h2>
          <p>You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Website.</p>

          <h2>Disclaimer</h2>
          <p>The materials on <Link href="/">www.aismartimage.com</Link>'s Website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties. Furthermore, aismartimage does not warrant or make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this site.</p>

          <h2>Limitation of Liability</h2>
          <p>aismartimage or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on <Link href="/">https://www.aisoratech.com/</Link>'s Website, even if aismartimage or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].</p>
          
        </div>
        
        <style jsx>{`
          .terms-container {
            background: #f7f7f7;
            padding: 40px;
            max-width: 800px;
            margin: 40px auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
          }
          .content {
            padding: 20px;
          }
          h2 {
            color: #007bff;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          p {
            color: #555;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 20px;
          }
          p a {
            color: #0066cc;
            text-decoration: none;
          }
          p a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndConditionsPage;
