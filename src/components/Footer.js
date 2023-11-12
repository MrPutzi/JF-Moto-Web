import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {/* Rest of your website content goes here */}
            </div>
            <footer className=" text-gray-100 p-10 mt-10">
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
                    <div className="flex-1">
                        <h3 className="text-gray-100 font-bold">Links</h3>
                        <ul className="mt-4">
                            <li><a href="/home" className="text-gray-400 hover:text-gray-100 underline">Home</a></li>
                            <li><a href="/reserve" className="text-gray-400 hover:text-gray-100 underline">Reserve</a></li>
                            <li><a href="/models" className="text-gray-400 hover:text-gray-100 underline">Models</a></li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-gray-100 font-bold">Social</h3>
                        <ul className="mt-4">
                            <li><a href="https://www.facebook.com/" className="text-gray-400 hover:text-gray-100 underline">Facebook</a></li>
                            <li><a href="https://www.youtube.com/" className="text-gray-400 hover:text-gray-100 underline">YouTube</a></li>
                            <li><a href="https://twitter.com/" className="text-gray-400 hover:text-gray-100 underline">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-gray-100 font-bold">Company</h3>
                        <ul className="mt-4">
                            <li><a href="/about" className="text-gray-400 hover:text-gray-100 underline">About Us</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-gray-100 underline">Contact Us</a></li>
                            <li><a href="/careers" className="text-gray-400 hover:text-gray-100 underline">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-10 border-t border-gray-600 pt-8">
                    <p>&copy; 2021 ATV Rental Services</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer