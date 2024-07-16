import { NAVIGATION } from "@/constants/header";
import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();

  return (
    <HStack justifyContent={"center"} w={"100%"} h={"100%"} spacing={4} pt={2}>
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
                    y: -100,
                  }}
                  animate={{
                    y: 0,
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
    </HStack>
  );
}

export default Header;