import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NextLinkProps extends LinkProps {
  children?: ReactNode;
  // className?: string;
  style?: CSSProperties;
  prefetch?: boolean;
  target?: '_blank';
  shallow?: boolean;
  scroll?: boolean;
  active: boolean;
}
// eslint-disable-next-line react/display-name
export default forwardRef(
  (
    {
      href,
      children,
      shallow = false,
      // className,
      // style,
      target,
      scroll = true,
      // ...props,
      active
    }: NextLinkProps,
    ref: any,
  ) => {
    return (
      <Link href={href} passHref shallow={shallow} scroll={scroll}>
        <a
          // {...props}
          ref={ref}
          href="dummy"
          // style={{
          //   textDecoration: 'none',
          //   color: 'var(--color-text)',
          //   ...style,
          // }}
          className={classNames(
            active
              ? "bg-gray-500 text-gray-100"
              : "text-gray-200",
            "block px-4 py-2 text-sm"
          )}
          target={target}
          rel={target ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      </Link>
    );
  },
);