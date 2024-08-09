import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Byte-Sized Notes</span>,
  project: {
    link: 'https://github.com/jyztintan/notes',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/jyztintan/notes',
  footer: {
    text: <div style={{ textAlign: 'center', width: '100%' }}>© 2024 Justin Tan | Byte-Sized Notes</div>,
  },
};

export default config;
