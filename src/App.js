import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  const [theme, SetTheme] = useState(false);

  return (
    <div className="App relative " data-theme={theme ? "light" : "dark"}>
      <button
        className="absolute right-3 top-3 mb-10 btn btn-sm btn-outline"
        onClick={() => SetTheme(!theme)}
      >
        {theme ? "Dark" : "Light"}
      </button>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
