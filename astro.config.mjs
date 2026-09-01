// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://claudecodeguide.abdallahgaber.dev',
  integrations: [
    starlight({
      title: 'Claude Code: The Practical Guide',
      description:
        'A fun, practical, no-nonsense guide to Claude Code — built by a Flutter team lead at LinkDev for his team, and shared as a free resource for anyone finding it useful.',
      social: [{ icon: 'external', label: 'abdallahgaber.dev', href: 'https://abdallahgaber.dev' }],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Core Workflow',
          items: [{ autogenerate: { directory: 'core-workflow' } }],
        },
        {
          label: 'Extending Claude',
          items: [{ autogenerate: { directory: 'extending-claude' } }],
        },
        {
          label: 'Automation & Feedback Loops',
          items: [{ autogenerate: { directory: 'automation-and-feedback-loops' } }],
        },
        {
          label: 'Beyond the Terminal',
          items: [{ autogenerate: { directory: 'beyond-the-terminal' } }],
        },
        {
          label: 'Team Playbook',
          items: [{ autogenerate: { directory: 'team-playbook' } }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
    react(),
  ],
});
