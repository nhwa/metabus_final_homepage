import { forwardRef } from 'react';
import classNames from 'classnames';
import './index.css';

const VideoSection = forwardRef(
  ({ as: Component = 'div', children, className, ...rest }, ref) => (
    <Component className={classNames('videosection', className)} ref={ref} {...rest}>
      {children}
    </Component>
  )
);

export default VideoSection;
