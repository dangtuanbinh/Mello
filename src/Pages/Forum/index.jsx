import { Box } from '@material-ui/core'
import React from 'react'
import wrapper from "../../HOCs/wrapper"
import ChatBody from "../../Components/ChatBody/index"

const Forum = () => {
    return (
        <>
            <Box>
               <ChatBody />
            </Box>
        </>
    )
}

export default wrapper(Forum)
