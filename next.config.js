// Import nextra and configure it
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    // Import these modules using dynamic imports or convert their imports to ESM
    remarkPlugins: [await import('remark-math').then(module => module.default)],
    rehypePlugins: [await import('rehype-katex').then(module => module.default)]
  }
});

export default withNextra;
