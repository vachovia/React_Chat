import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import { RootLayout } from "./../components/Layout";
import { Login, Register } from "./../components/Auth";
import { Chat } from "./../components/Chat";
import { NotFound } from "./../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Chat />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} />
        <Route path=":id" element={<CareerDetails />} />
      </Route> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
