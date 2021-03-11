import { Avatar, Box } from '@material-ui/core'
import React from 'react'
import "./index.css"

const UserListItem = ({nickname,profilePic,city}) => {
    console.log(nickname)
    return (
        <>
            <Box className="userListItem">
                <Avatar src={profilePic}/>
                <h3>{nickname}</h3>
                <h4>{city}</h4>
            </Box>
        </>
    )
}

export default UserListItem
