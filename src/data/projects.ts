import jiraImg from '../assets/jira-board.jpeg';
import confluenceImg from '../assets/confluence-ebr.jpeg';
import teamsImg from '../assets/teams-calendar.jpeg';
import excelImg from '../assets/excel-dashboard.jpeg';
import notionImg from '../assets/notion-projects.jpeg';
import TrackerImg from '../assets/Tracker.jpeg';
import AIAutomateImg from '../assets/Automate.jpeg';
import SharepointImg from '../assets/Sharepoint.jpeg';
import AdmincenterImg from '../assets/Admincenter.jpeg';

export type ProjectCategory =
  | 'Executive Support'
  | 'Projects'
  | 'Operations'
  | 'Reporting'
  | 'Planning';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  short: string;
  role: string;
  responsibilities: string[];
  tools: string[];
  outcomes: string[];
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: 'jira-board',
    title: 'Jira Project Management Board',
    category: 'Projects',
    short: 'Customized Jira setup for tracking sprint progress and issue workflows.',
    role: 'Project Manager',
    responsibilities: [
      'Designed custom workflows and permission schemes',
      'Configured automated rule triggers for status transitions',
      'Managed backlog grooming and sprint planning'
    ],
    tools: ['Jira', 'Agile', 'Scrum'],
    outcomes: ['Streamlined issue tracking', 'Improved sprint predictability'],
    images: [{ src: jiraImg, alt: 'Jira Board Overview' }]
  },
  {
    id: 'confluence-kb',
    title: 'Knowledge Base & Documentation Hub',
    category: 'Executive Support',
    short: 'Centralized Confluence workspace for cross-team documentation and SOPs.',
    role: 'Technical Writer / Admin',
    responsibilities: [
      'Structured space permissions and page hierarchies',
      'Created reusable templates for meeting notes and project specs',
      'Standardized internal process documentation'
    ],
    tools: ['Confluence', 'Documentation'],
    outcomes: ['Centralized knowledge repository', 'Faster onboarding for new hires'],
    images: [{ src: confluenceImg, alt: 'Confluence Knowledge Base' }]
  },
  {
    id: 'teams-calendar',
    title: 'Teams Executive Calendar & Coordination',
    category: 'Executive Support',
    short: 'Integrated scheduling and collaboration hub using MS Teams and Outlook.',
    role: 'Executive Assistant',
    responsibilities: [
      'Managed complex calendar schedules and meeting logistics',
      'Integrated shared calendars across multiple departments',
      'Automated meeting reminders and agenda distributions'
    ],
    tools: ['Microsoft Teams', 'Outlook', 'Microsoft 365'],
    outcomes: ['Eliminated schedule conflicts', 'Improved team coordination'],
    images: [{ src: teamsImg, alt: 'Teams Calendar Schedule' }]
  },
  {
    id: 'excel-dashboard',
    title: 'Excel Financial & Data Dashboard',
    category: 'Reporting',
    short: 'Advanced data visualization and reporting model built with Excel.',
    role: 'Data Analyst',
    responsibilities: [
      'Built interactive KPI tracking dashboards using PivotTables',
      'Automated data cleanup using Power Query formulas',
      'Provided monthly operational reports to management'
    ],
    tools: ['Excel', 'Power Query', 'Data Analysis'],
    outcomes: ['Automated monthly reporting', 'Enhanced data visibility'],
    images: [{ src: excelImg, alt: 'Excel Financial Dashboard' }]
  },
  {
    id: 'notion-workspace',
    title: 'Notion Project & Asset Tracker',
    category: 'Planning',
    short: 'Connected database system for resource allocation and task execution.',
    role: 'Operations Coordinator',
    responsibilities: [
      'Created relation/rollup databases for cross-project tracking',
      'Built customized view templates for team members',
      'Maintained project milestones and deadlines'
    ],
    tools: ['Notion', 'Planning'],
    outcomes: ['Better resource alignment', 'Single source of truth for assets'],
    images: [{ src: notionImg, alt: 'Notion Workspace Tracker' }]
  },
  {
    id: 'supervision-tracker',
    title: 'Supervision & Field Tracker',
    category: 'Operations',
    short: 'Operational oversight tool designed for field tracking and supervision.',
    role: 'Operations Lead',
    responsibilities: [
      'Monitored daily field activities and performance metrics',
      'Generated compliance and status updates',
      'Streamlined team communication and task delegation'
    ],
    tools: ['Tracking Systems', 'Operations Management'],
    outcomes: ['Increased field accountability', 'Real-time operational monitoring'],
    images: [{ src: TrackerImg, alt: 'Supervision Tracker View' }]
  },
  {
    id: 'power-automate-flow',
    title: 'PowerAutomate Workflow Automation',
    category: 'Operations',
    short: 'Automated notification and data sync workflows across M365 apps.',
    role: 'Automation Specialist',
    responsibilities: [
      'Constructed automated flows between Email, Forms, and SharePoint',
      'Reduced manual administrative tasks by 40%',
      'Configured approval flow sequences for management sign-offs'
    ],
    tools: ['Power Automate', 'Microsoft 365', 'Workflow Automation'],
    outcomes: ['40% reduction in admin workload', 'Faster approval turnarounds'],
    images: [{ src: AIAutomateImg, alt: 'Power Automate Workflow Diagram' }]
  },
  {
    id: 'sharepoint-portal',
    title: 'SharePoint Intranet & Asset Repository',
    category: 'Executive Support',
    short: 'Structured document repository and team portal built on SharePoint.',
    role: 'SharePoint Administrator',
    responsibilities: [
      'Configured site architecture, libraries, and access lists',
      'Managed user permissions and security compliance',
      'Organized corporate document storage and versioning'
    ],
    tools: ['SharePoint', 'Microsoft 365'],
    outcomes: ['Secure document storage', 'Standardized document version control'],
    images: [{ src: SharepointImg, alt: 'SharePoint Intranet Portal' }]
  },
  {
    id: 'admin-center-control',
    title: 'M365 Admin Center Control & Governance',
    category: 'Operations',
    short: 'Centralized admin management for user roles, security, and policies.',
    role: 'IT System Admin',
    responsibilities: [
      'Managed user onboarding, licensing, and security roles',
      'Implemented group policies and access security',
      'Monitored system usage logs and health metrics'
    ],
    tools: ['M365 Admin Center', 'IT Support', 'Security'],
    outcomes: ['Enhanced tenant security', 'Streamlined user provisioning'],
    images: [{ src: AdmincenterImg, alt: 'M365 Admin Center Interface' }]
  }
];
