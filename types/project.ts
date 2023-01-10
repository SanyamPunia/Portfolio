export interface ProjectType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  bgImage: string;
  logoImage: string;
  githubUrl: string;
  previewUrl?: string;
}
