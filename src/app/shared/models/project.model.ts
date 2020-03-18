export class Project {
  id: string;
  name: string;
  tagList: Array<string>;
  role: string;
  description: string;
  url?: string;
  screenshotUrls: Array<string>;
  thumb: {
    brandUrl: string;
    bgColor: string;
  };
}
