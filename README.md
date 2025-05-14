<div align="center">
<img alt="Portfolio" src="https://res.cloudinary.com/dxurnpbrc/image/upload/v1747126424/1_ftwuie.png" width="90%">
</div>

# Devporto - Developer Portfolio
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fadilsflow/devporto)

Built with Next.js 15, [shadcn/ui](https://ui.shadcn.com/), and deployed on Vercel.

# Features

- Quick setup by editing a [single config file](./app/data.ts)
- Built using Next.js 15.3, React 19, TypeScript, Shadcn/UI, TailwindCSS, Framer Motion
- Blog functionality with MDX support
- RSS feed generation
- Project showcase section with detailed project pages
- GitHub statistics integration
- Linktree-style links page for social or content navigation
- Fully responsive design for all devices
- Dark/Light theme support

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/fadilsflow/devporto
   ```

2. Move to the cloned directory:

   ```bash
   cd devporto
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

4. Start the local server:

   ```bash
   npm run dev
   # or
   bun dev
   ```

5. Open the [Config file](./app/data.ts) and customize your portfolio settings


# Setting Up Your Website Icon (Favicon)

A favicon is the small icon that appears in browser tabs and bookmarks. Here's how to set it up:

1. Create or prepare a square image for your favicon (minimum 260x260 pixels)
2. Go to [RealFaviconGenerator](https://realfavicongenerator.net/favicon-generator/nextjs) - this tool will create all the favicon files you need
3. Upload your image and follow the simple customization options
4. Click "Generate" and download the favicon package
5. Extract the favicon files to:
   - `app` folder - Files that follow Next.js conventions will have HTML markup automatically generated
   - `public` folder - Static favicon files that need to be publicly accessible
6. The favicons are already configured in `app/config/seo.ts` - no changes needed unless you used different file names

That's it! Your website will now show your custom icon across all browsers and devices.

# Setting Up Google Search Console

Google Search Console helps you monitor and optimize your website's presence in Google Search results. Here's how to set it up:

1. Go to [Google Search Console](https://search.google.com/search-console)

2. Click "Add Property" and choose "URL prefix" property type

3. Enter your website URL (e.g., https://yourdomain.com)
f
4. Verify ownership using one of these methods:
   - Upload HTML file to your website
   - Add HTML meta tag to your homepage
   - Use your Google Analytics or Tag Manager account
   - Add DNS record

5. Once verified, submit your sitemap:
   - Go to "Sitemaps" section in left sidebar
   - Enter your sitemap URL: `https://yourdomain.com/sitemap.xml?refresh=1`
   - Click "Submit"

6. Wait for Google to process your sitemap and start indexing your pages
   - This may take a few days
   - You can monitor indexing status in the "Coverage" report

Google Search Console will now help you:
- Monitor your site's performance in search results
- Identify and fix indexing issues
- See which queries bring users to your site
- Get notifications about critical issues

Remember to check Search Console regularly to ensure your site maintains good visibility in Google Search.


# License

Licensed under the [MIT license](./LICENSE).
