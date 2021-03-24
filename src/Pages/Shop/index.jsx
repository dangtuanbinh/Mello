import { Box } from '@material-ui/core'
import React from 'react'
import wrapper from "../../HOCs/wrapper"
import UpdatingScreen from "../../Components/UpdatingScreen/index"


const Shop = () => {
    return (
        <>
            <Box>
                <UpdatingScreen />
            </Box>
        </>
    )
}

export default wrapper(Shop)
