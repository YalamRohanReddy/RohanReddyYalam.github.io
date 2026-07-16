export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Playwright Automation Framework',
    description:
      'Scalable automation framework using Playwright and TypeScript with Page Object Model and Azure DevOps integration.',
    tech: ['Playwright', 'TypeScript', 'Azure DevOps', 'GitHub Actions'],
    githubLink: 'https://github.com/rohanreddyyalam/playwright-automation-framework',
    liveLink: 'https://github.com/rohanreddyyalam',
  },
  {
    title: 'Selenium Java Framework',
    description: 'Hybrid automation framework supporting regression testing across web platforms.',
    tech: ['Selenium', 'Java', 'TestNG', 'Maven'],
    githubLink: 'https://github.com/rohanreddyyalam/selenium-java-framework',
    liveLink: 'https://github.com/rohanreddyyalam',
  },
  {
    title: 'API Automation',
    description: 'REST API automation using Postman with reusable collections and environment management.',
    tech: ['Postman', 'API Testing', 'Automation'],
    githubLink: 'https://github.com/rohanreddyyalam/api-automation',
    liveLink: 'https://github.com/rohanreddyyalam',
  },
  {
    title: 'CI/CD Automation',
    description: 'Integrated automation suite into Azure DevOps pipelines for continuous validation and release readiness.',
    tech: ['Azure DevOps', 'CI/CD', 'Testing'],
    githubLink: 'https://github.com/rohanreddyyalam/ci-cd-automation',
    liveLink: 'https://github.com/rohanreddyyalam',
  },
];
