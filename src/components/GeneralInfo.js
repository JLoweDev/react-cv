import React from 'react'

const GeneralInfo = () => {
    return (
        <div>
            <div className="max-w-sm mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md">
                    <div className="mt-1 px-2 py-1 bg-white border-b border-gray-200 font-bold uppercase">
                        General Information
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-6'>Name:</h1>
                        <p>John Smith</p>
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-6'>Email:</h1>
                        <p>JohnSmith@gmail.com</p>
                    </div>
                    <div className="p-1 bg-white border-b border-gray-200 flex flex-row justify-between">
                        <h1 className='pr-6'>Phone Number:</h1> 
                        <p>01023734123</p>
                    </div>
                    <div className="p-3 bg-white border-gray-200 text-right">
                        <a className="bg-indigo-600 shadow-md text-sm text-white font-bold py-2 md:px-4 px-1 hover:bg-indigo-400 rounded uppercase" 
                            href="#">Edit Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo
