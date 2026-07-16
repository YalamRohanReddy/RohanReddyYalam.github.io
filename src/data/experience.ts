export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Cognizant',
    role: 'Senior Test Analyst',
    duration: 'Feb 2025 – Present',
    points: [
      'Led Playwright automation using TypeScript.',
      'Developed a scalable automation framework for web and API testing.',
      'Integrated automation into Azure DevOps pipelines.',
      'Collaborated with Germany, Poland, and Italy teams.',
      'Mentored QA engineers and improved automation coverage.',
      'Worked with AI-assisted automation tools to accelerate delivery.',
    ],
  },
  {
    company: 'Qualitest',
    role: 'Test Engineer',
    duration: 'Nov 2020 – Jan 2025',
    points: [
      'Built Selenium Java automation suites for regression workflows.',
      'Delivered manual and API testing across product releases.',
      'Logged defects and performed requirement analysis in Agile sprints.',
      'Executed compatibility testing across browsers and devices.',
      'Created 400+ detailed test cases and logged 200+ defects.',
      'Earned client appreciation for quality delivery.',
    ],
  },
];
