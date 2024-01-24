import React from 'react';
import Sidebar, { SidebarItem } from './Sidebar';
import { LayoutDashboard, LifeBuoy, LogOut, Package, Receipt, Settings, UserCircle } from 'lucide-react';

export default function Profile() {
  return (
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard"/>
      <SidebarItem icon={<Package size={20}/>} text="Orders" alert/>
      <SidebarItem icon={<Receipt size={20}/>} text="Billings"/>
      <SidebarItem icon={<UserCircle size={20}/>} text="User" active/>
      <SidebarItem icon={<LifeBuoy size={20}/>} text="Help"/>
      <SidebarItem icon={<Settings size={20}/>} text="Settings" />
      <SidebarItem icon={<LogOut size={20}/>} text="Log Out"/>


    </Sidebar>
  )
}
