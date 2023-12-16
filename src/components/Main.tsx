import type { FC, PropsWithChildren } from "react";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className="main flex-grow px-3">{children}</main>;
};
