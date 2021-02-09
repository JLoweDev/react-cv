import React from 'react'
import GeneralInfo from './GeneralInfo'
import EduInfo from './EduInfo'

const InfoCont = () => {
    return (
        <div className='flex flex-row justify-between mt-12 mx-32'>
            <GeneralInfo />
            <EduInfo />
            <GeneralInfo />
        </div>
    )
}

export default InfoCont
