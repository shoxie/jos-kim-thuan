import HamburgerButton from "@/components/Common/HamburgerButton";
import { NAVIGATION } from "@/constants/header";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = (state: boolean) => {
        setIsOpen(state);
    }

    return (
        <>

            <HStack justifyContent={"space-between"} w={"100%"} h={"100%"} spacing={4} pt={4} px={6}>
                <Box>
                    <Link href="/" passHref>
                        <HStack>
                            <Text fontSize={"large"} fontWeight={"600"}>The Keeper Of Memory</Text>
                        </HStack>
                    </Link>

                </Box>
                <HamburgerButton onClick={handleClick} />
            </HStack>
            <VStack 
                mt={5}
                spacing={4}
                as={motion.div}
                overflow="hidden"
                background={"white"}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    paddingBottom: isOpen ? 8 : 0,
                    paddingTop: isOpen ? 8 : 0,
                }}
                textColor={"#333"}
            >
                {
                    NAVIGATION.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                as={motion.div}
                                animate={{
                                    opacity: router.pathname === item.href ? 1 : 0.7,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                }}
                                whileHover={{
                                    opacity: 1,
                                }}
                            >
                                <Link href={item.href} passHref>
                                    <Text
                                        as={motion.div}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            transition: {
                                                duration: 1.5,
                                            },
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </Link>
                            </Box>
                        );
                    })
                }
            </VStack>
        </>
    );
}

export default MobileMenu;