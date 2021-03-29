import { Box } from '@material-ui/core'
import React from 'react'
import wrapper from "../../HOCs/wrapper"
import UserListScreen from "../../Components/UserListScreen/index";
import "./index.css"
import Footer from '../../Components/Footer';

const UserList = () => {
    return (
        <>
            <Box className="userList">
                <UserListScreen />
            </Box>
        </>
    )
}

export default wrapper(UserList)
