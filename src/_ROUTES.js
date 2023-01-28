import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Services from "./pages/Services"
import UploadFile from "./pages/UploadFile"
import FilePreview from "./pages/FilePreview"


const ROUTES = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/privacy",
        component: Privacy
    },
    {
        path: "/terms",
        component: Terms
    },
    {
        path:"/services",
        component: Services
    },
    {
        path: "/converter",
        component: UploadFile
    },
    {
        path: "/file-preview",
        component: FilePreview
    }
];

export default ROUTES