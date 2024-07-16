import projectApi from "@/api/project";
import ImagesGrid from "@/components/Common/ImageGrid";
import PageBanner from "@/components/Common/PageBanner";
import ProjectView from "@/components/Layout/ProjectView";
import { ProjectProps } from "@/types/global";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";

const ProjectPage = () => {
    const router = useRouter();
    const [project, setProject] = useState<ProjectProps>({
        id: "",
        name: "",
        description: "",
        images: [],
        thumbnail: "",
        projectDate: "",
    });
    const { id } = router.query;

    useEffect(() => {
        async function fetchData() {
            if (!id && Array.isArray(id)) {
                return;
            }
            await projectApi.getProject(id as string).then((res) => {
                setProject(res.data);
                console.log('res.data', res.data)
            }).catch((err) => {
                console.log(err);
            });
        }
        fetchData();
    }, [id]);

    return (
        <Box p={10}>
            <PageBanner header={project.name} description={project.description} />
            <ImagesGrid images={project.images} />
        </Box>
    )
};

ProjectPage.Layout = ProjectView;

export default ProjectPage;