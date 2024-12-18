# Svelte Starter Template

This is a starter template for building Svelte projects, powered by [`sv`](https://github.com/sveltejs/cli).

---

## Features

- Simple setup for Svelte projects.
- Fast development with live reloading.
- Ready-to-build production configurations.
- Easily customizable for your project needs.
- Includes an **Admin Console** and a **Landing Page** to kickstart your app.

---

## Creating a Project

Start by creating a new Svelte project using the `sv` CLI.

### Steps:

1. Create a new project in the current directory:
   ```bash
   npx sv create
   ```

2. Create a new project in a specified folder (e.g., `my-app`):
   ```bash
   npx sv create my-app
   ```

---

## Developing

After creating a project and installing dependencies, start the development server:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server on port 4000:
   ```bash
   npm run dev -- --port 4000
   ```

   The app will be available at `http://localhost:4000` by default.

---

## Building

To generate a production-ready version of your app:

1. Build the app:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## Admin Console and Landing Page

This template includes the following pre-configured pages:

1. **Admin Console**:
   - Manage application settings and monitor performance.
   - Access the Admin Console at `/admin` (example: `http://localhost:4000/admin`).

2. **Landing Page**:
   - A customizable homepage for your application.
   - Access the Landing Page at `/` (example: `http://localhost:4000`).

You can edit these pages in the `src/routes` directory.

---

## Deploying

To deploy your application, you may need to install a suitable [adapter](https://svelte.dev/docs/kit/adapters) based on your target environment, such as:
- **Static sites**: `@sveltejs/adapter-static`
- **Node.js servers**: `@sveltejs/adapter-node`
- **Serverless platforms**: `@sveltejs/adapter-vercel`, `@sveltejs/adapter-netlify`, etc.

Check the [official SvelteKit adapters documentation](https://kit.svelte.dev/docs/adapters) for more information.

---

## Resources

- [Svelte Documentation](https://svelte.dev/docs)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [GitHub Repository](https://github.com/stormdotcom/svelte-template)

---

This template is designed to streamline your Svelte development workflow. Feel free to explore and customize it to suit your project needs! 🚀

