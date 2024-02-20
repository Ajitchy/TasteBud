import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import TastebudLogo from '../Images/TasteBudLogo.png'
//import ProfileIcon from '../Images/ProfileIcon.jpg';
import Man1 from '../Images/Man1.jpg';
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsOpen } from '../Redux/Slices/isOpenSlice'; //import the action

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const isOpen = useSelector((state) => state.isOpen);
    const dispatch = useDispatch(); //get dispatch function from  redux to call actions
    const user = useSelector((state) => state.user); //redux
    return (
        <main>
            {/* sidebar hase Z-20 and sidebarNav has Z-10 so sidebar will show above sidebarNav because 
                z-index property specifies the stack order of the element. An element with greater stack
                order is always in front of an element with lower stack order
            */}
            <aside className={`h-screen fixed z-20 ${isOpen ? "w-52" : ""} ${isOpen ? "block" : "hidden"} lg:block`}>
                <nav className="h-full flex flex-col bg-lavenderblush-custom border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Link to="/">
                            <img src={TastebudLogo} className={`overflow-hidden transition-all ${isOpen ? "w-32" : "w-0"}`} alt="logo" />
                        </Link>
                        <button onClick={() => dispatch(toggleIsOpen())} className="p-1.5 rounded-lg bg-gray-50 hover:bg-red-500">
                            {isOpen ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ isOpen }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        {user.profileImage ? (<img src={Man1} className="w-10 h-10 rounded-md" alt="profile icon" />
                        ) : (
                            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-red-custom text-lg font-bold text-white">
                                {user.name[0].toUpperCase()}
                            </div>
                        )}
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold">{user.name}</h4>
                                <span className="text-xs text-gray-600">{user.email}</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>


        </main>
    )
}

export function SidebarItem({ text, icon, active, alert, onClick, to }) {
    const { isOpen } = useContext(SidebarContext)
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

                {!isOpen && (
                    <div
                        className='absolute left-full rounded-md px-2 py-1 ml-6
                        bg-red-100 text-red-800 text-sm
                        invisible opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
                    >
                        {text}
                    </div>
                )}
            </li >
        </Link>

    )
}
