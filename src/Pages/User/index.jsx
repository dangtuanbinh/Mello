import { Box } from '@material-ui/core'
import React from 'react'
import wrapper from "../../HOCs/wrapper"


const UserList = () => {
    return (
        <>
            <Box>
                This is user list page
            </Box>
        </>
    )
}

export default wrapper(UserList)
