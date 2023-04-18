import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Router";
import AiProvider from "./contexts/AiContext";
import StorageProvider from "./contexts/StorageContext";

function App() {
  const Router = routes;
  return (
    <div className="App">
      <StorageProvider>
        <AiProvider>
          <RouterProvider router={Router}></RouterProvider>
        </AiProvider>
      </StorageProvider>
    </div>
  );
}

export default App;
