import { Box, useColorModeValue } from '@chakra-ui/react'
import SandboxHeader from './sandboxHeader'
import SandboxFooter from './sandboxFooter'
import { Outlet } from 'react-router-dom'

export default function Layout() {

    const foreGroundColor = useColorModeValue('black', 'white')
    return (<>
        <SandboxHeader foregroundColor={foreGroundColor} />
        <Box id='mainBody' p={9}>
            {/* This is where the children will be rendered */}
            <Outlet />
        </Box>
        <SandboxFooter foregroundColor={foreGroundColor} />
    </>)
}