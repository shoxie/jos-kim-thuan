import { ImageProps, ProjectProps } from "@/types/global";
import { Box, Grid, GridItem, HStack, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const LazyImage = ({ project }: { project: ProjectProps }) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };

    return (
        <Image
            as={motion.img}
            initial={{
                opacity: 0,
                height: "100%",
            }}
            animate={{
                opacity: imageLoading ? 0 : 1,
                height: imageLoading ? "100%" : "0%",
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
            src={project.thumbnail}
            alt={project.name}
            zIndex={1}
            display="inline-block"
            onLoad={imageLoaded}
            key={project.id}
        />
    )
}

const ProjectGrid = ({ images: projects }: { images: ProjectProps[] }) => {
    return (
        <Box
            sx={{ columnCount: [1, 2, 3] }}
        >
            {projects.map((project, index) => {
                return (
                    <Box p={{
                        base: 2,
                    }} key={index} w={"100%"} h={"100%"}>
                        <Link href={`/project/${project.id}`}>
                            <Tooltip label={project.name}>
                                <VStack position={"relative"} align={"center"} w={"100%"} h={"100%"}>
                                    <LazyImage project={project} />
                                    <VStack mt={-10} top={"100%"} alignItems={"center"} justifyItems={"center"} zIndex={2} position={"absolute"}>
                                        <Box>{project.name}</Box>
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

export default ProjectGrid;