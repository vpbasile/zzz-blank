import { Flex, Heading, VStack, Link } from "@chakra-ui/react";
import ColorModeButton from "../colorModeButton";

export default function Header(props: { foregroundColor: string }) {
    const foregroundColor = props.foregroundColor;

    // Stuff for toggling the menu
    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => setIsOpen(!isOpen)

    // function MenuToggle({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) {
    //     return (<Box display={{ base: "block", md: "none" }} onClick={toggle}>
    //         {isOpen ? <CloseIcon /> : <MenuIcon />}
    //     </Box>);
    // }

    return (<Flex id="header" borderBottom={`2px solid ${foregroundColor}`} marginBottom={'xl'}>
        <VStack>
            <Heading flex={3} as={'h1'}><Link href="/">ZZZ Blank Project</Link></Heading>
            <ColorModeButton />
        </VStack>
    </Flex >)
}