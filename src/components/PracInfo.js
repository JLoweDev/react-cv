import React from 'react'

const PracInfo = () => {
    return (
        <div>
            <div className="max-w-md mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md">
                    <div className="mt-1 px-2 py-1 bg-white border-b border-gray-200 font-bold uppercase">
                        Practical Experience
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-8'>Company Name:</h1>
                        <p>Starbucks</p>
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-8'>Position:</h1>
                        <p>Barista</p>
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-8'>Main Tasks:</h1>
                        <p>Spitting in Coffee</p>
                    </div>
                    <div className="p-1 bg-white flex flex-row justify-between">
                        <h1 className='pr-8'>Date Started:</h1> 
                        <p>Jul-2020</p>
                    </div>
                    <div className="p-1 bg-white border-b border-gray-200 flex flex-row justify-between">
                        <h1 className='pr-8'>Date Completed:</h1> 
                        <p>Sep-2020</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className="p-3 bg-white border-gray-200 text-right">
                            <a className="bg-indigo-600 shadow-md text-sm text-white font-bold py-2 md:px-4 px-1 hover:bg-indigo-400 rounded uppercase" 
                                href="#">Add More</a>
                        </div>
                        <div className="p-3 bg-white border-gray-200 text-right">
                            <a className="bg-indigo-600 shadow-md text-sm text-white font-bold py-2 md:px-4 px-1 hover:bg-indigo-400 rounded uppercase" 
                                href="#">Edit Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracInfo
