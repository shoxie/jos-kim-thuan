import { ImageProps } from "@/types/global";
import { Box, Grid, GridItem, HStack, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const ImagesGrid = ({ images }: { images: ImageProps[] }) => {
    return (
        <Box
            sx={{ columnCount: [1, 2, 3, 4] }}
        >
            {images.map((image, index) => {
                return (
                    <Box p={{
                        base: 2,
                    }} key={index} w={"100%"} h={"100%"}>
                        <Link href={`/project/1`}>
                            <Tooltip label={image.name}>
                                <VStack position={"relative"} align={"center"} w={"100%"} h={"100%"}>
                                    <Image
                                        as={motion.img}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            zIndex: 1,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                            },
                                        }}
                                        viewport={{ once: true, amount: 0.7 }}
                                        src={image.url}
                                        alt={image.name}
                                        zIndex={1}
                                        display="inline-block"
                                    />
                                    <VStack mt={-10} top={"100%"} alignItems={"center"} justifyItems={"center"} zIndex={2} position={"absolute"}>
                                        <Box>{image.name}</Box>
                                    </VStack>
                                </VStack>
                            </Tooltip>
                        </Link>
                    </Box>
                )
            })}
        </Box>
    )
}

export default ImagesGrid;