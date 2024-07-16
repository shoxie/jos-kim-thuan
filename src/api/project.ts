import httpRequest from "../lib/requestInstance";

const projectApi = {
  getProjects: async (params?: any) => {
    return await httpRequest.get("/api/projects", params);
  },
  getProject: async (id: string) => {
    return await httpRequest.get(`/api/projects/${id}`);
  },
  createProject: async (params: any) => {
    return await httpRequest.post("/api/projects", params);
  },
  updateProject: async (params: any) => {
    return await httpRequest.put("/api/projects/:id", params);
  },
  deleteProject: async (params: any) => {
    return await httpRequest.delete("/api/projects/:id", params);
  },
};

export default projectApi;