import React from 'react'
import GeneralInfo from './GeneralInfo'

const InfoCont = () => {
    return (
        <div className='flex flex-row justify-between mt-12 mx-32'>
            <GeneralInfo />
            <GeneralInfo />
            <GeneralInfo />
        </div>
    )
}

export default InfoCont
