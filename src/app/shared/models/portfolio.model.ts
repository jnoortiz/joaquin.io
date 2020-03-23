export class PortfolioSkill {
  name: string;
  count: number;
}

export class PortfolioProject {
  id: string;
  name: string;
  role: string;
  skills: Array<string>;
  description: string;
  url?: string;
  screenshotUrls: Array<string>;
  thumb: {
    brandUrl: string;
    bgColor: string;
  };
}

export class Portfolio {
  skills: Array<PortfolioSkill>;
  projects: Array<PortfolioProject>;
  constructor() {
    this.skills = [];
    this.projects = [];
  }
}
