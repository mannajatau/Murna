export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: 'Virtual Assistant',
    company: 'Lifecome Care',
    location: 'Remote',
    dates: 'Jan 2026 – Present',
    bullets: [
      'Deliver remote administrative and operational support, optimizing daily calendar management, email dispatch, and client correspondence.',
      'Manage electronic healthcare records, client databases, and scheduling systems with strict adherence to confidentiality and data compliance.',
      'Streamline workflow automation across remote tools (MS Teams, Outlook, Excel) to improve task turnaround times and team responsiveness.',
      'Serve as a key liaison between internal healthcare coordinators, stakeholders, and external clients to ensure seamless service delivery.'
    ]
  },
  {
    title: 'Executive Assistant to the Executive Director',
    company: 'Stella Maris School & Subsidiaries',
    location: 'Abuja, Nigeria',
    dates: 'July 2025 – Present',
    bullets: [
      'Direct executive calendar logistics, priority scheduling, and complex meeting management across primary and subsidiary entities.',
      'Author executive briefs, board-level meeting minutes, and high-priority action trackers to drive leadership follow-through.',
      'Coordinate cross-functional department heads to align multi-subsidiary strategic projects with core organizational KPIs.',
      'Design structured reporting mechanisms and decision-support documentation for executive-level review.'
    ]
  },
  {
    title: 'Administrative / Executive Support Assistant',
    company: 'Staredge Public Health Consultancy',
    location: 'Abuja, Nigeria',
    dates: 'Nov 2024 – Jun 2025',
    bullets: [
      'Facilitated high-level stakeholder engagement, managing official correspondence and executive scheduling for consultancy leadership.',
      'Coordinated recruitment lifecycles, staff onboarding documentation, and human resource record governance.',
      'Tracked project milestones and deliverable timelines across public health consulting operations to ensure on-time execution.'
    ]
  }
];

export const highlights = [
  {
    year: '2026–Now',
    title: 'Remote Executive Operations',
    detail: 'Delivering end-to-end Virtual Assistant support at Lifecome Care, driving remote administrative efficiency and client coordination.'
  },
  {
    year: '2025–Now',
    title: 'Multi-Entity Leadership Support',
    detail: 'Managing executive workflows, board communication, and strategic tracking across Stella Maris School and its subsidiaries.'
  },
  {
    year: 'Core Strength',
    title: 'Workflow Automation & Action Tracking',
    detail: 'Bridging administration and technology to convert leadership strategies into structured timelines, owner tracking, and measurable outcomes.'
  }
] as const;
