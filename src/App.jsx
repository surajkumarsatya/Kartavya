import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
      ],
    },
  ]); 

  return <RouterProvider router={router} />;
}

export default App;
