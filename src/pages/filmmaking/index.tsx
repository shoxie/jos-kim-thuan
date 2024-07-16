import ProjectGrid from "@/components/Common/ProjectGrid";
import PageBanner from "@/components/Common/PageBanner";
import { IMAGES, PROJECTS } from "@/constants/mock";
import { Box } from "@chakra-ui/react";
import { forwardRef } from "react";

const FilmmakingPage = forwardRef((props, ref) => {
  return (
    <Box ref={ref as any}>
      <PageBanner header="The Keeper Of Memory" description="Welcome to my gallery" />
      <ProjectGrid images={PROJECTS} />
    </Box>
  )
})

FilmmakingPage.displayName = "FilmmakingPage";

export default FilmmakingPage;