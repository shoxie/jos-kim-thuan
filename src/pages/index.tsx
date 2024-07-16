import projectApi from "@/api/project";
import ProjectGrid from "@/components/Common/ProjectGrid";
import PageBanner from "@/components/Common/PageBanner";
import { IMAGES, PROJECTS } from "@/constants/mock";
import { Box } from "@chakra-ui/react";
import { forwardRef, useEffect, useState } from "react";
import { ProjectProps } from "@/types/global";

const Homepage = forwardRef((props, ref) => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      await projectApi.getProjects().then((res) => {
        setProjects([...PROJECTS, ...res.data]);
      }).catch((err) => {
        console.log(err);
      });
    }
    fetchData();
  }, []);

  return (
    <Box ref={ref as any}>
      <PageBanner header="The Keeper Of Memory" description="Welcome to my gallery" />
      <ProjectGrid images={projects} />
    </Box>
  )
})

Homepage.displayName = "Homepage";

export default Homepage;