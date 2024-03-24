
const BlogCard = ({ title, subtitle, subtitleUrl, altInfo, imageUrl }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="content">
        <h2 className="subtitle"><a href={subtitleUrl}>{subtitle}</a></h2>
        <img src={imageUrl} alt={altInfo} className="image" />
      </div>
      <style jsx>{`
        .card {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .title {
          color: #333;
          text-align: center;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #555;
          font-size: 18px;
          margin-bottom: 12px;
          text-align: center;
        }
        .image {
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default BlogCard;