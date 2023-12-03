import type { FC, PropsWithChildren } from "react";

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="sidebar">
      <style>{`
      nav.sidebar{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        max-height: 100vh;
        overflow-y: scroll;
      }
      nav.sidebar ul li{
        display: block;
        padding: 0.3rem 0.3rem 0.3rem 1rem;
      }
      `}</style>
      <header>
        <h3>@babel/types by example</h3>
      </header>
      {children}
    </nav>
  );
};

//const NavSidebar = style
