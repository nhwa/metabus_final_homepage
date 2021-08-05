import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;
  return (
    // <svg
    //   aria-hidden
    //   className={classNames('monogram', className)}
    //   width="46"
    //   height="29"
    //   viewBox="0 0 46 29"
    //   {...props}
    // >
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="50"
      height="45"
      viewBox="0 0 81 90"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points="0 48.6 0 81.97 5.01 78.9 10.03 75.83 10.03 42.46 5.01 45.53 0 48.6" />
          <path d="M79.39,75V47.66L76,45.58l-8.24-5.1-4.34,2.66-7.19,4.4-5.52,3.38-6.26,3.84h0V21.38L0,.19V8L38.27,25.17l-5.35,3.27h0L0,13.75v8.6L25.28,33.12l-4.19,2.57L0,27v8.6l12.7,5.24V74.19l4.43-2.71,4.43-2.71V43.9l4-2.39V66.32l3.68-2.26,3.67-2.25V37.14L38.27,34V58.54L79.41,82.1v-7Zm-3.38-2L49.75,57.83l6.19-4L76,65.2Zm0-14.2L61.29,50.44l7-4.46L76,50.56Z" />
          <polygon points="79.39 33.37 79.39 11.93 79.39 0 77.72 1.02 76.04 2.05 76.04 13.26 76.04 35.42 77.72 34.4 79.39 33.37" />
          <polygon points="56.24 21.1 56.24 14.17 53.48 15.86 50.72 17.55 50.72 23.29 50.72 50.92 50.72 50.92 56.24 47.54 56.24 21.1" />
          <polygon points="67.77 16.53 67.77 7.11 65.6 8.44 63.43 9.77 63.43 18.25 63.43 43.14 67.77 40.48 67.77 16.53" />{' '}
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
