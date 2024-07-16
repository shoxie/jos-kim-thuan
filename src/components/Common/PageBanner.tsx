import { Box, Text, VStack } from "@chakra-ui/react";

type Props = {
    header: string;
    description: string;
};

const PageBanner = ({ header, description }: Props) => {
    return (
        <VStack alignItems={"center"} justifyContent={"center"} w={"100%"} h={"100%"} py={{
            base: 10,
            '2xl': 72,
        }} className="max-w-screen-lg mx-auto text-center">
            <Box>
                <Text fontSize={{
                    base: 24,
                    md: 32,
                    lg: 36,
                    '2xl': 60,
                }} fontFamily={"Roboto"}>
                    {header}
                </Text>
            </Box>
            <Box>
                <Text opacity={0.7} fontFamily={"playfairDisplay"} as={"p"} className="leading-loose text-base">
                    {description}
                </Text>
            </Box>
        </VStack>
    );
}

export default PageBanner;