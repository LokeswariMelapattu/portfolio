import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface CommonProps {
  variant?: Variant;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const className = [styles.button, styles[variant]].join(' ');

  if (props.as === 'a') {
    const { as: _as, ...anchorProps } = props;
    return (
      <a className={className} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props;
  return (
    <button type="button" className={className} {...buttonProps}>
      {children}
    </button>
  );
}
