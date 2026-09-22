import type { ReactNode } from 'react';

type ScreenFrameProps = {
  children: ReactNode;
  label: string;
};

export function ScreenFrame({ children, label }: ScreenFrameProps) {
  return (
    <article className="screenColumn">
      <p className="deviceLabel">{label}</p>
      <section className="phoneScreen">{children}</section>
    </article>
  );
}
