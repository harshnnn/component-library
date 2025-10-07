import React from 'react';
import './Avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  initials,
  size = 'md',
  className,
  ...rest
}) => {
  const [hasError, setHasError] = React.useState(false);
  const showImage = src && !hasError;

  const fallbackInitials =
    initials || (alt ? alt.charAt(0).toUpperCase() : undefined) || '?';

  const avatarClass = ['rc-avatar', `rc-avatar--${size}`, className].filter(Boolean).join(' ');

  return (
    <div className={avatarClass} {...rest}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="rc-avatar__image"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="rc-avatar__initials" aria-hidden="true">
          {fallbackInitials}
        </span>
      )}
    </div>
  );
};

export default Avatar;