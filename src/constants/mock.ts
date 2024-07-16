import { ImageProps } from "@/types/global";

const IMAGES: ImageProps[] = [
  
];

const PROJECTS = [
  {
    id: "1",
    name: "Project 1",
    description: "This is a project description",
    images: IMAGES,
    thumbnail: "https://picsum.photos/2048/1024?random=1",
    projectDate: "2022-01-01",
  },
  {
    id: "2",
    name: "Project 2",
    description: "This is a project description",
    images: IMAGES,
    thumbnail: "https://picsum.photos/2048/1024?random=2",
    projectDate: "2022-01-02",
  },
  {
    id: "3",
    name: "Project 3",
    description: "This is a project description",
    images: IMAGES,
    thumbnail: "https://picsum.photos/2048/1024?random=3",
    projectDate: "2022-01-03",
  },
];  

export { IMAGES, PROJECTS };
