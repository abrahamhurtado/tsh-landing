export default ({ caption, subtitle }) => (
  <div className="carousel-caption d-md-block">
    <h3 className="caption-header">{caption}</h3>
    <p className="caption-subtitle">{subtitle}</p>
    <style jsx>{`
      .caption-header {
        text-align: left;
        font-size: 3.25rem;
      }
      .caption-subtitle {
        text-align: left;
        font-size: 1.5rem;
      }

      @media screen and (max-width: 600px) {
        .caption-header {
          font-size: 2rem;
        }
        .caption-subtitle {
          font-size: 1rem;
        }
      }
    `}</style>
  </div>
);
