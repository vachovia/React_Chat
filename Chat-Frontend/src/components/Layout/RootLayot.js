import { Outlet } from "react-router-dom"; // , NavLink
// import Breadcrumbs from "./Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
       {/* <header>
        <nav className="px-4 py-2">
          <h2>Chat.io</h2>
          <NavLink to="/">Chat</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </nav>
       <Breadcrumbs />
      </header> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
