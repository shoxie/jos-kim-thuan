export type ImageProps = {
  src: string;
  name: string;
  projectId: string;
  url: string;
};

export type ProjectProps = {
    id: string;
    name: string;
    description: string;
    images: ImageProps[];
    thumbnail: string;
    projectDate: string;
}