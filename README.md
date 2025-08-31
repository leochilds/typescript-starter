# typescript-starter

TypeScript starter template with Jest for testing, ESLint for linting, and Winston for logging.

## Prerequisites

This project targets the latest Node.js LTS release. Ensure your environment uses **Node.js 22.x**.

## Running in a Dev Container

1. Install Docker and the VS Code **Dev Containers** extension.
2. Open the command palette and select **Dev Containers: Open Folder in Container...**.
3. VS Code builds the container from `.devcontainer/devcontainer.json` and runs `npm install` automatically.

## Running Locally

1. Install dependencies: `npm install`.
2. Use the npm scripts below to develop, test, and build the project.

## npm Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Runs `watch` to rebuild and lint on file changes. |
| `npm start` | Executes the compiled code from `dist/`. |
| `npm run build` | Compiles TypeScript using `tsconfig.build.json`. |
| `npm run build:fast` | Faster, less strict build for development. |
| `npm test` | Runs the Jest test suite. |
| `npm run lint` | Lints the `src/` directory without making changes. |
| `npm run format` | Applies ESLint fixes to the `src/` directory. |
| `npm run check` | Runs `lint` and `build:fast`. |
| `npm run watch` | Runs `check` whenever source files change. |

## Environment Variables

No environment variables are required by default. You can supply your own variables via the shell or a `.env` file and access them with `process.env`.

## Commit Conventions

This repository follows [Conventional Commits](https://www.conventionalcommits.org/). Examples: `feat: add feature` or `fix: resolve issue`.

## Continuous Integration

GitHub Actions runs lint and test jobs on each push and pull request to ensure the project builds and tests pass.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get involved.

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

## EditorConfig

This project includes an `.editorconfig` file to enforce consistent coding styles.
Install an EditorConfig plugin for your editor to automatically apply these settings.

## Scripts

- `npm run dev` - Runs `src/index.ts` using ts-node-dev, automatically restarting on file changes.
