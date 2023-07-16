import * as React from 'react';

export interface ILayoutProps {
    children:React.ReactNode
}

export default function Layout (props: ILayoutProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
