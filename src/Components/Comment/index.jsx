import { Box } from '@material-ui/core'
import React from 'react'
import CommentScreen from "../CommentScreen/index"
import CommentSender from "../CommentSender/index"
import "./index.css"

const Comment = ({postID, user}) => {
    return (
        <>
            <Box>
                <CommentScreen postID={postID} user={user} />
                <CommentSender postID={postID} user={user}/>
            </Box>
        </>
    )
}

export default Comment
