export interface TourStop {
  path: string;
  title: string;
  minutes: number;
}

export interface Tour {
  id: string;
  label: string;
  blurb: string;
  iconName: 'compass' | 'terminal-check' | 'shield';
  stops: TourStop[];
}

export const tours: Tour[] = [
  {
    id: 'new',
    label: 'New to Claude Code',
    blurb: "Never touched it, or just poked at it once. We'll get you from zero to comfortable.",
    iconName: 'compass',
    stops: [
      { path: '/getting-started/installation-and-first-session/', title: 'Installation and First Session', minutes: 6 },
      { path: '/getting-started/configuration/', title: 'Configuration', minutes: 5 },
      { path: '/core-workflow/plan-mode/', title: 'Plan Mode', minutes: 4 },
      { path: '/core-workflow/sessions-context-and-memory/', title: 'Sessions, Context, and Memory', minutes: 6 },
      { path: '/team-playbook/security-and-client-data/', title: 'Security and Client Data', minutes: 5 },
      { path: '/reference/cheat-sheet/', title: 'Cheat Sheet', minutes: 4 },
    ],
  },
  {
    id: 'daily',
    label: 'Already using it daily',
    blurb: "You know the basics. Let's get more out of every session.",
    iconName: 'terminal-check',
    stops: [
      { path: '/extending-claude/subagents/', title: 'Subagents', minutes: 5 },
      { path: '/extending-claude/skills-and-commands/', title: 'Skills and Custom Commands', minutes: 7 },
      { path: '/extending-claude/hooks/', title: 'Hooks', minutes: 4 },
      { path: '/automation-and-feedback-loops/tests-and-browser-feedback/', title: 'Tests and Browser Feedback', minutes: 5 },
      { path: '/automation-and-feedback-loops/the-ralph-loop/', title: 'The Ralph Loop', minutes: 4 },
      { path: '/team-playbook/model-and-cost-guidance/', title: 'Model and Cost Guidance', minutes: 5 },
    ],
  },
  {
    id: 'evaluating',
    label: 'Evaluating for my team',
    blurb: "Deciding whether and how to roll this out. Here's what actually matters for that call.",
    iconName: 'shield',
    stops: [
      { path: '/team-playbook/security-and-client-data/', title: 'Security and Client Data', minutes: 5 },
      { path: '/team-playbook/shared-conventions-and-claude-md/', title: 'Shared Conventions and CLAUDE.md', minutes: 5 },
      { path: '/team-playbook/model-and-cost-guidance/', title: 'Model and Cost Guidance', minutes: 5 },
      { path: '/team-playbook/claude-code-for-flutter-teams/', title: 'Claude Code for Flutter Teams', minutes: 6 },
      { path: '/extending-claude/mcp-and-built-in-tools/', title: 'MCP and Built-in Tools', minutes: 4 },
      { path: '/beyond-the-terminal/desktop-app/', title: 'Desktop App', minutes: 5 },
    ],
  },
];

export function totalMinutes(tour: Tour): number {
  return tour.stops.reduce((sum, stop) => sum + stop.minutes, 0);
}
