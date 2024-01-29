import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TastebudLogo from '../Images/TasteBudLogo.png'
//import ProfileIcon from '../Images/ProfileIcon.jpg';
import Man1 from '../Images/Man1.jpg';
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="flex">
            <aside className={`h-screen fixed z-10 ${isOpen ? " sm:static" : ""}`}>
                <nav className="h-full flex flex-col bg-lavenderblush-custom border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src={TastebudLogo} className={`overflow-hidden transition-all ${isOpen ? "w-32" : "w-0"}`} alt="logo" />

                        <button onClick={()=>setIsOpen(curr =>!curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-red-500">
                            {isOpen ?<ChevronFirst /> : <ChevronLast/>}
                        </button>
                    </div>
                    
                    <SidebarContext.Provider value={{isOpen}}>
                    <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img src={Man1} className="w-10 h-10 rounded-md" alt="profile icon" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold">Ajit Chaudhary</h4>
                                <span className="text-xs text-gray-600">Ajit@tastebud.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
            

        </div>
    )
}

export function SidebarItem({ text, icon, active, alert, onClick, to }) {
    const {isOpen} = useContext(SidebarContext)
    return (
        <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
            <li onClick={onClick} className={`relative flex items-center p-3 my-1 font-medium
                        rounded-md cursor-pointer transition-colors
                        ${active ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-700"
                    : "text-gray-600 hover:bg-red-50"
                }`}>
                {/* Link component from react-router-dom comes with its own style that can override your css. To prevent this you can pass your css classes directly to the Link or clear the styles of the Link component */}

                {icon}
                <span className={`overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {alert && <span className={`absolute right-2 w-2 h-2 rounded-full bg-red-500 ${isOpen ? "" : "top-2"}`} />}
            </li >
        </Link>

    )
}
