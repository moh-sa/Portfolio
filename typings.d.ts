interface CardProps {
  id: number;
  title: string;
  description: string;
  year: number;
  type: "img" | "vid";
  media_url: string;
  demo_url: string;
  repo_url: string;
  hide: boolean;
}
