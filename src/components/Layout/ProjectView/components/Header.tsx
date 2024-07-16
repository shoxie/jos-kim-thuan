import { NAVIGATION } from "@/constants/header";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <HStack justifyContent={"space-between"} w={"100%"} h={"100%"} spacing={4} pt={2} px={4}>
      <Box>
        <Link href="/" passHref>
          <HStack>
            <Text fontSize={"large"} fontWeight={"600"}>The Keeper Of Memory</Text>
            <Text fontFamily={"Roboto"}>Photography</Text>
          </HStack>
        </Link>

      </Box>
      <HStack spacing={4}>
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
                      x: 500,
                    }}
                    animate={{
                      x: 0,
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
    </HStack>
  );
}

export default Header;