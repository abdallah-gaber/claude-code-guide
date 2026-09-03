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
      editLink: {
        baseUrl: 'https://github.com/abdallah-gaber/claude-code-guide/edit/main/',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://claudecodeguide.abdallahgaber.dev/og.png' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://claudecodeguide.abdallahgaber.dev/og.png' },
        },
        {
          // Vercel Web Analytics — framework-agnostic script tag. Vercel serves this path
          // automatically on any project with Web Analytics enabled in its dashboard; it
          // only responds on the actual Vercel deployment (404s locally/in preview builds,
          // harmlessly since the tag is deferred).
          tag: 'script',
          attrs: { src: '/_vercel/insights/script.js', defer: true },
        },
      ],
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
