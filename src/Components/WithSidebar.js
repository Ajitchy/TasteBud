import React, { useState } from 'react';
import Sidebar, { SidebarItem } from './Sidebar';
import { LayoutDashboard, LifeBuoy, LogOut, Package, Receipt, Settings, UserCircle } from 'lucide-react';


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
            { text: "Log Out", icon: <LogOut size={20} />, to: "/LogOut" }
        ]

        return (
            <div className="flex">
                
                <Sidebar>
                    {SidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            alert={item.alert}
                            active={item.text === activeItem}
                            to={item.to}
                            onClick={() => setActiveItem(item.text)}
                        />

                    ))}
                </Sidebar>
                <Component {...props} />

            </div>
        )
    };
}
