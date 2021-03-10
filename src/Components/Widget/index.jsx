import { Box } from '@material-ui/core'
import React from 'react'
import "./index.css"

const Widget = () => {
    return (
        <>
            <Box className="widgets">
            <iframe width="340" height="100%" src="https://www.youtube.com/embed/yKUn4fNfD6I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <iframe width="340" height="100%" src="https://www.youtube.com/embed/uIdbn1CdGoU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Box>
        </>
    )
}

export default Widget
