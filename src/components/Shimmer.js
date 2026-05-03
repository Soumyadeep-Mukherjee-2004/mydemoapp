import './Shimmer.css';

const Shimmer = ({ count = 3 }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-avatar"></div>
          <div className="shimmer-content">
            <div className="shimmer-line short"></div>
            <div className="shimmer-line long"></div>
            <div className="shimmer-line medium"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
