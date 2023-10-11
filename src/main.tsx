import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import "@/assets/css/global.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Provider} from "react-redux"
import store from "@/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    </ThemeProvider>
)
