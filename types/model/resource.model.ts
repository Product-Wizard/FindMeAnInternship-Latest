export interface ResourceModelInterface {
  id: number;
  title: string;
  category: string;
  author: string;
  imageUrl: string;
  summary: string;
  body: string;
  dateUploaded: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateResourceType = Omit<ResourceModelInterface, "id">