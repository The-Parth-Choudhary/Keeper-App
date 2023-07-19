import ReactDOM from "react-dom/client"
import App from "./components/App"
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)