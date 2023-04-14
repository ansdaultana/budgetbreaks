import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import Modal from '../components/Modal';
function Booking() {
    



   
    const [ModalOn, setModalOn] = useState(false);
    const onClicked=()=>{
setModalOn(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent form from submitting
      };
    

    
  return (
    <div>
        <Header/>
        <section className="hero" id="home">
        <div className="container">

          <h2 className="h1 hero-title">Explore Pakistan on a Budget</h2>

          <p className="hero-text">
    Budget Breakers is a guide aimed at travelers looking href experience Pakistan's rich cultural heritage, stunning landscapes, and warm hospitality while keeping their expenses low. The guide offers practical and effective money-saving tips for budget-conscious travelers who want href explore Pakistan without compromising on the quality of their experience.
         </p>

              </div>
      </section>
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Book your Trip now
                    </h2>
                    <form className="justify-center w-full mx-auto"  onSubmit={handleSubmit}   action="">
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input requried name="firstName" type="text" placeholder="First Name"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input  name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ={true}  />
                                        </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input  name="Last Name" type="text" placeholder="Email"
                                       className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" requried/>
                                       </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Card Number"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Card Number</label>
                                    <input requried name="Card Number" type="text" placeholder="1234 1234 1234 1234"
                                       className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ="true" />
                                       </div>
                            </div>
                            <div className="space-x-0 lg:flex mt-4 lg:space-x-4">
                                
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                    Expiry Date </label>
                                    <input requried name="Expiry Date" type="text" placeholder="MM/YY"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div className="w-full  lg:w-1/2 ">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                    CVC
                                    </label>
                                    <input requried name="CVC" type="text" placeholder="CVC"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                        </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input requried name="city" type="text" placeholder="City"
                                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                      </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input requried name="postcode" type="text" placeholder="Post Code"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input requried type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                       
                        </div>
                        <div className="flex justify-end mt-4">
        <button onClick={onClicked}
        id="openModalBtn" className="w-half center px-6 py-2 text-white-200 dark:bg-gray-500 hover:bg-blue-900">Book</button>
                            </div>
                    </form>
                </div>
                </div>
        </div>

{ModalOn && <Modal setModalOn={setModalOn} />}
    </div>
  )
}

export default Booking
