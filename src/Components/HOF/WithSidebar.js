import React, { useState } from 'react';
import Sidebar, { SidebarItem } from '../Sidebar';
import { LayoutDashboard, LifeBuoy, LogOut, Package, Receipt, Settings, UserCircle } from 'lucide-react';
//redux
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Slices/userSlice';

export default function WithSidebar(Component) {
    return function WrappedComponent(props) {
        const [activeItem, setActiveItem] = useState("Orders");
        const SidebarItems = [
            { text: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/dashboard", alert: true },
            { text: "Orders", icon: <Package size={20} />, to: "/orders" },
            { text: "Billings", icon: <Receipt size={20} />, to: "/billings" },
            { text: "User", icon: <UserCircle size={20} />, to: "/user" },
            { text: "Help", icon: <LifeBuoy size={20} />, to: "/help" },
            { text: "Settings", icon: <Settings size={20} />, to: "/settings" },
            { text: "Log Out", icon: <LogOut size={20} />, to:"/" }
        ]

        //redux
        const dispatch = useDispatch();

        const handleLogout = () => {
            dispatch(logout());
        }

        return (
            <div className="flex">

                <Sidebar>
                    {SidebarItems.map((item, index) => {
                        if (item.text === "Log Out") {
                            return (
                                <SidebarItem
                                    key={index}
                                    icon={item.icon}
                                    text={item.text}
                                    active={item.text === activeItem}
                                    to={item.to}
                                    onClick={handleLogout}
                                />
                            )
                        } else {
                            return (
                                <SidebarItem
                                    key={index}
                                    icon={item.icon}
                                    text={item.text}
                                    alert={item.alert}
                                    active={item.text === activeItem}
                                    to={item.to}
                                    onClick={() => setActiveItem(item.text)}
                                />
                            )
                        }

                    })}
                </Sidebar>
                <Component {...props} />

            </div>
        )
    };
}
