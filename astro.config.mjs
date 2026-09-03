// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://claudecodeguide.abdallahgaber.dev',
  integrations: [
    starlight({
      title: 'Claude Code Guide',
      description:
        'A fun, practical, no-nonsense guide to Claude Code — built by a Flutter team lead at LinkDev for his team, and shared as a free resource for anyone finding it useful.',
      social: [
        { icon: 'laptop', label: "Abdallah Gaber's portfolio", href: 'https://abdallahgaber.dev' },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      components: {
        PageFrame: './src/components/overrides/PageFrame.astro',
        Header: './src/components/overrides/Header.astro',
        SocialIcons: './src/components/overrides/SocialIcons.astro',
      },
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
