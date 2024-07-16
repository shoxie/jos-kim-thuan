import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const MAX_WIDTH = 5;
const BAR_WIDTH = 8;
const BAR_HEIGHT = 1;
const HAMBURGER_GAP = 1;
const HAMBURGER_HEIGHT = (BAR_HEIGHT * 3) + HAMBURGER_GAP * 2;
const HAMBURGER_WIDTH = HAMBURGER_HEIGHT * 1.41421356237;

type Props = {
    onClick: (state: boolean) => void;
}

const HamburgerButton = ({ onClick }: Props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        const newValue = !isClicked;
        setIsClicked(newValue);
        onClick(newValue);
    }

    return (
        <VStack maxW={MAX_WIDTH} spacing={HAMBURGER_GAP} onClick={handleClick}>
            <Box
                w={BAR_WIDTH}
                h={BAR_HEIGHT}
                bg={"white"}
                className="rounded-xl"
                as={motion.div}
                animate={{
                    rotate: isClicked ? 45 : 0,
                    width: isClicked ? `${HAMBURGER_WIDTH * 4}px` : BAR_WIDTH * 4,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                    transformOrigin: "left center",
                    translate: `0 ${Math.abs(BAR_HEIGHT / -2)}`
                }}
            />
            <Box
                w={BAR_WIDTH}
                h={BAR_HEIGHT}
                bg={"white"}
                className="rounded-xl"
                as={motion.div}
                animate={{
                    opacity: isClicked ? 0 : 1,
                    width: isClicked ? 0 : `${BAR_WIDTH * 4}px`,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                }}
            />
            <Box
                w={BAR_WIDTH}
                h={BAR_HEIGHT}
                bg={"white"}
                className="rounded-xl"
                as={motion.div}
                animate={{
                    rotate: isClicked ? -45 : 0,
                    width: isClicked ? `${HAMBURGER_WIDTH * 4}px` : BAR_WIDTH * 4,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                    transformOrigin: "left center",
                    translate: `0 ${(BAR_HEIGHT / 2) * 4}px`
                }}
            />
            
        </VStack>
    )
}

export default HamburgerButton;