import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'
import React from 'react'

const JustSpinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) 
}

export default JustSpinner