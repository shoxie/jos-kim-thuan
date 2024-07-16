import { Box, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import MobileMenu from "../Common/MobileMenu";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  const router = useRouter();

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
      <Box as="main" p={5}>{children}</Box>
    </Box>
  );
}
