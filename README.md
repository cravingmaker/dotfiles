# dotfiles

This repository contains my personal dotfiles, used to configure my development environment across machines. These dotfiles help maintain consistency and efficiency in my workflow.

## Contents

- **.husky/**: Configuration for Git hooks using Husky.
- **.vscode/**: Visual Studio Code settings and extensions.
- **src/**: Source files and scripts for various tools and configurations.
  - **apps/**: Application-specific configurations.
  - **configs/**: Code configurations.
  - **env/**: Environment-specific settings.
  - **fonts/**: Custom fonts.
  - **scripts/**: Utility scripts.
  - **snippets/**: Code snippets.
- **eslint.config.mjs**: ESLint configuration.
- **prettier.config.mjs**: Prettier configuration.
- **tsconfig.json**: TypeScript configuration.
- **package.json**: Project metadata and dependencies.
- **pnpm-lock.yaml**: Lockfile for dependencies managed by pnpm.
- **LICENSE**: License information.

## Setup

To set up these dotfiles on a new machine, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/cravingmaker/dotfiles.git
   cd dotfiles
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

## Contributing

If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.
