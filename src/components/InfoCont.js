import React from 'react'
import GeneralInfo from './GeneralInfo'
import EduInfo from './EduInfo'
import PracInfo from './PracInfo'

const InfoCont = () => {
    return (
        <div className='flex flex-row justify-between mt-12 mx-32'>
            <GeneralInfo />
            <EduInfo />
            <PracInfo />
        </div>
    )
}

export default InfoCont
