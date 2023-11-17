<a href="https://www.sanyam.xyz/"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" /></a>

## ✨ sanyam.xyz

- [Next.js](https://nextjs.org/) + TypeScript - **Framework**
- [hygraph](https://hygraph.com/) + [GraphQL](https://graphql.org/) - **Content Management System (CMS)**
- [Tailwind CSS](https://tailwindcss.com/) - **Styling**
- [Framer Motion](https://www.framer.com/motion/) - **Animations**
- [VERCEL](https://vercel.com/) - **Deployment**
- [linear.app](https://linear.app/) - **Streamlining & Roadmap**

<hr />

## 🔬 Local Setup

```bash
$ git clone https://github.com/SanyamPunia/Sanyam.xyz.git
$ cd Sanyam.xyz
$ npm install
$ npm run dev
```

Create a `.env.local` file & add the required `env` in it.

```bash
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
SPOTIFY_REFRESH_TOKEN=...
YOUTUBE_API_KEY=...
YOUTUBE_CHANNEL_ID=...
HYGRAPH_ENDPOINT=...
```

## 📃 Usage

Remove all of my personal information/content before using it as a template. Feel free to explore and contribute to the project. I'm open to all the PRs.

## 📜 Logs (Updates)

- **Next.js** (v13.0 → v13.2)

  - Remove `head.tsx` and replace it using the [`metadata`](https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api) object.
  - Dynamically generate metadata using [`generateMetadata`](https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata) function.
  - Using `title-templates` to suffix title.
  - Add `experience` tab (state) inside the `work` route
  - Integrate [`Vercel Analytics`](https://vercel.com/docs/concepts/analytics) for gathering portfolio stats such as number of visitors & web vitals data.
  - Migrate `api` routes from `pages/api` to `app/api`
    - `get-artist`
    - `get-now-playing`
    - `get-yt-stats`
  - Share static PDF using `buildRedirect` inside `async redirects()`

- **Next.js** (v13.2 → v13.4)

  - Migrate from `@next/font` to `next/font` using [`Codemon`](https://nextjs.org/docs/pages/building-your-application/upgrading/codemods#132)
  - Minor UI upgrade

- **Next.js** (v13.4 → v14.0)
