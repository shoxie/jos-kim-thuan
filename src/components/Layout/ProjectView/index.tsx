import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MobileMenu from "../../Common/MobileMenu";

type Props = {
    children: React.ReactNode;
};

export default function ProjectView({ children }: Props) {
    return (
        <Box
            as={motion.div}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 2,
                },
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                },
            }}
        >
            <div className="hidden md:block">
                <Header />
            </div>
            <div className="md:hidden">
                <MobileMenu />
            </div>
            <Box as="main">{children}</Box>
        </Box>
    );
}
