import React from 'react';
import SidebarNav from './SidebarNav';
import Man1 from '../Images/Man1.jpg';
import backgroundimg from '../Images/backgroundimg.jpg';

export default function Dashboard() {
    return (
        <div className="flex-1">
            <SidebarNav />
            <main>
                <div className="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">

                    <div className="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-4">
                        <div className="col-span-2 p-6 m-4 rounded-xl border border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6" style={{backgroundImage: `url(${backgroundimg})`}}>
                            <img src={Man1} alt='man' className='h-60 w-60 mr-6 ml-6 rounded-full' />
                            <div className="flex flex-col items-end justify-end">
                                <h2 className="text-xl font-bold text-white">Get Discount Voucher</h2>
                                <h2 className="text-xl font-bold text-white">Up To 20%</h2>
                                <p className="text-sm text-white"> On Your First Order Using TASTEBUD Coupon Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                        <div className="col-span-2 p-6 rounded-xl border bg-red-custom border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6">
                            <div className="flex flex-col p-6 bg-lavenderblush-custom rounded-xl">
                                <h2 className="text-red-custom">Balance</h2>
                                <h2 className="text-red-custom text-xl font-bold">Rs 400.00</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}
