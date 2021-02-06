import React from 'react'

const GeneralInfo = () => {
    return (
        <div>
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md">
                    <div class="mt-1 px-2 py-1 bg-white border-b border-gray-200 font-bold uppercase">
                        General Information
                    </div>
                    <div class="p-1 bg-white">
                        <span>Beef</span>
                    </div>
                    <div class="p-1 bg-white border-b border-gray-200">
                        <span>Pork</span>
                    </div>
                    <div class="p-3 bg-white border-gray-200 text-right">
                        <a class="bg-indigo-600 shadow-md text-sm text-white font-bold py-2 md:px-4 px-1 hover:bg-indigo-400 rounded uppercase" 
                            href="#">Edit Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo
