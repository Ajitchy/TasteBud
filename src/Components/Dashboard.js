import React from 'react';
import SidebarNav from './SidebarNav';
import backgroundimg from '../Images/backgroundimg.jpg';
import briyani from '../Images/briyani.jpg'

export default function Dashboard() {
    return (
        <div className="flex-1">
            <SidebarNav />
            <main>
                <div className="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">

                    <div className="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-4">
                        <div className="col-span-2 p-6 m-4 rounded-xl border border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6" style={{ backgroundImage: `url(${backgroundimg})` }}>
                            <img src={briyani} alt='man' className='h-20 w-20 md:h-60 md:w-60 mr-6 ml-6 rounded-full' />
                            <div className="flex flex-col items-end justify-end">
                                <h2 className="text-xl font-bold text-white">Get Discount Voucher</h2>
                                <h2 className="text-xl font-bold text-white">Up To 20%</h2>
                                <p className="text-sm text-white"> On Your First Order Using TASTEBUD Coupon Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-lavenderblush-custom p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                        <div className="col-span-2 p-6 rounded-xl border bg-red-custom border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6">
                            <div className="flex flex-col p-6 bg-lavenderblush-custom rounded-xl">
                                <h2 className="text-red-custom">Balance</h2>
                                <h2 className="text-red-custom text-xl font-bold">Rs 400.00</h2>
                            </div>
                        </div>
                        <div className=" p-6 rounded-xl border bg-white border-gray-50 flex flex-row justify-between items-center overflow-hidden max-h-40 space-y-6">
                            <h2 className="text-gray">Your Address</h2>
                            <div className="flex flex-col p-6 rounded-xl">
                                <h2 className="text-red-custom">Ace Capitol, Noida</h2>
                                <h2 className="text-red-custom text-xl font-bold">Rs 400.00</h2>
                            </div>
                        </div>

                        <div className="flex items-center justify-center bg-lavenderblush-custom">
                            <div className="p-8 rounded-3xl bg-white max-w-sm w-full">
                                <div className="flex items-center space-x-2">
                                    <div className="space-y-0.5 flex-1">
                                        <h2 className="font-bold text-2xl tracking-tight text-gray-900 leading-tight">Order Menu</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                                            <img src={briyani} alt="briyani" className="w-6 h-6" />
                                        </span>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-sm font-bold">Briyani</h3>
                                            <div className="divide-x divide-gray-200 mt-auto">
                                                <span className="inline-block px-3 text-xs leading-none teat-gray-400 font-normal first:pl-0">
                                                    x1
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-sm">Rs 130</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                                            <img src={briyani} alt="briyani" className="w-6 h-6" />
                                        </span>
                                        <div className="flex flex-col flex-1">
                                            <h3 className="text-sm font-bold">Pepperoni Pizza</h3>
                                            <div className="divide-x divide-gray-200 mt-auto">
                                                <span className="inline-block px-3 text-xs leading-none teat-gray-400 font-normal first:pl-0">
                                                    x1
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-sm">Rs 130</h2>
                                    </div>
                                </div>
                                <div className="mt-9 grid gap-2.5">
                                    <div className="flex items-center">
                                        <div className="flex flex-col flex-1">
                                            <span className="flex flex-row justify-between">
                                                <h3 className="text-sm font-bold">Services</h3>
                                                <h2 className="font-bold text-sm">Rs 1.00</h2>
                                            </span>
                                            <span className="flex flex-row mt-9 justify-between">
                                                <h3 className="text-sm font-bold">Total</h3>
                                                <h2 className="font-bold text-sm">Rs 131.00</h2>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </main>

        </div>
    )
}
