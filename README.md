# typescript-starter
This is my typescript starter template that includes jest for testing, eslint for linting, winston for logging and has some helpful scripts for dev.

## Development Container

This project includes a [Dev Container](https://containers.dev/) configuration for VS Code. With the Dev Containers extension installed, you can open the repository in a containerized environment with all dependencies pre-installed:

1. Install Docker and the Dev Containers extension.
2. Open the command palette and select **Dev Containers: Open Folder in Container...**.

The container uses the `mcr.microsoft.com/devcontainers/base:0-ubuntu-22.04` image.
It installs Node.js 22 via the devcontainer `node` feature before running `npm install`.

## Prerequisites

This project targets the latest Node.js LTS release. Ensure your environment uses **Node.js 22.x**.

## Configuration

Environment variables are managed with [dotenv](https://www.npmjs.com/package/dotenv).
Create a `.env` file by copying `.env.example` and updating the values as needed:

```bash
cp .env.example .env
```

Load and validate these variables in code through `src/config.ts`:

```ts
import config from './config';

console.log(`Running in ${config.nodeEnv} mode on port ${config.port}`);
```

