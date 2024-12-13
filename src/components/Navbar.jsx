import Button from "./common-ui/Button"
import { NavMenus } from "../data/footerData"

export function NavBar() {
    return (
        <nav className="flex fixed z-20 w-full items-center justify-between py-10 px-6 mx-auto">
            <div className="flex items-center gap-12">
                <a href="/" className="flex items-center">
                    <img src="/assets/logo.png" alt="" className=" w-16 h-16 rounded-lg" />
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {NavMenus.map((menu, index) => (
                        <a key={index} href={menu.path} className="text-secondary-dark hover:text-primary">{menu.title}</a>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <span className="text-white font-bold text-lg">Call Us +12 348.247.2548</span>
                <Button title="Let's Talk" color="bg-primary" hover="hover:bg-secondary" />
            </div>
        </nav>
    )
}

