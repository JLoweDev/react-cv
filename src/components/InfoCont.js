import React from 'react'
import GeneralInfo from './GeneralInfo'
import EduInfo from './EduInfo'
import PracInfo from './PracInfo'

const InfoCont = ({ onToggleGeneral, onToggleEducational, onTogglePractical }) => {
    return (
        <div className='flex flex-row justify-between mt-12 mx-32'>
            <GeneralInfo onToggle={onToggleGeneral} />
            <EduInfo onToggle={onToggleEducational} />
            <PracInfo onToggle={onTogglePractical} />
        </div>
    )
}

export default InfoCont
