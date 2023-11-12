import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="bg-white rounded shadow-2xl p-8 m-4 max-w-md w-full mx-auto">
                    <h1 className="text-gray-800 text-3xl font-semibold">Subscribe</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstName" className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                                <input id="firstName" type="text" name="firstName" placeholder="John" autoComplete="given-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastName" className="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                                <input id="lastName" type="text" name="lastName" placeholder="Doe" autoComplete="family-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </span>
                        </div>
                        <span>
                              <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Zadajte svôj email"></input>
                        </span>

                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}