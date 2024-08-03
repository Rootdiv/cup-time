import ContentLoader from 'react-content-loader';
import './skeleton.scss';

export const SkeletonLoader = ({ count = 6 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, index) => (
        <div key={index} className="skeleton-wrapper">
          <ContentLoader
            seed={2}
            viewBox="0 0 420 600"
            backgroundColor="#6cb9ab"
            foregroundColor="#64099b">
            <rect x="0" y="0" width="100%" height="75%" />
            <rect x="24" y="80%" width="80%" height="30" />
            <rect x="24" y="90%" width="40%" height="25" />
          </ContentLoader>
        </div>
      ))}
  </>
);
