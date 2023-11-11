import { Flex, Heading, VStack, Link } from "@chakra-ui/react";
import ColorModeButton from "./helpers/colorModeButton";
// import { useState } from "react";

export type routeType = {
    path: string;
    element: JSX.Element;
    displayName: string;
    font?: string;
    uid: number;
    tags?: string;
}

export default function Header(props: { foregroundColor: string, routes: routeType[] }) {
    // const routes = props.routes;
    const foregroundColor = props.foregroundColor;

    // Stuff for toggling the menu
    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => setIsOpen(!isOpen)

    // function MenuToggle({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) {
    //     return (<Box display={{ base: "block", md: "none" }} onClick={toggle}>
    //         {isOpen ? <CloseIcon /> : <MenuIcon />}
    //     </Box>);
    // }

    // let keyGen = 0;

    return (<Flex id="header" borderBottom={`2px solid ${foregroundColor}`} marginBottom={'xl'}>
        <VStack>
            <Heading flex={3} as={'h1'}><Link href="/">uFocus</Link></Heading>
            <ColorModeButton />
        </VStack>
    </Flex >)
}