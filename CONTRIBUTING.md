# Developing [Codegen](https://github.com/Leo5661/codegen/)

Thank you for considering contributing to CodeGen! We welcome contributions from the community to make this project better.

Please take a moment to review this document to understand how to contribute effectively.

## Code of Conduct

We expect all contributors to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it carefully before making any contributions.

## Getting Started

Before you start contributing, ensure that you have idea of:

1. [TurboRepo](https://turbo.build/repo/docs) to maintain all apps as single repo
2. [Next.js v14](https://nextjs.org/docs) for Docs website
3. [Node.js v20](https://nodejs.org/docs/latest/api/) for codegen-cli
3. [Typescript](https://www.typescriptlang.org/docs/) as language

## Local development

### Fork and Clone the repo

1. To setup local development environment fork [Codegen Repo](https://github.com/Leo5661/codegen/).

2. Clone your Github forked repo:
    ```sh
    git clone https://github.com/<your-username>/codegen.git
    ``` 
3. Go to codegen directory:
    ```sh
    cd codegen
    ```

### Install dependencies

1. Install the the dependencies in root of the repo. 
    ```sh
    pnpm i
    ```

2. After that you can run app with the following.
    ```sh
    pnpm dev:doc  # for doc website dev server

    # or

    pnpm dev:cli # for cli in watch mode
    ```
3. To see the apps in dev: 
    * For doc site visit ``` http://localhost:3000 ```
    * For local CLI to use run:
        ```sh
        pnpm dlx turbo link-pkg --filter=@codegen/cli
        ```
    * After linking package to local store use:
        ```sh
        cgen init # cgen -alias for codegen-cli
        ```

## Raising an Issue

If you want to report a bug or raise a feature request please submit issue on [Issue Tracker](https://github.com/Leo5661/codegen/issues) as per the template provided [Bug Report Template](https://github.com/Leo5661/codegen/blob/main/.github/ISSUE_TEMPLATE/bug_report.md), [Feature Request Template](https://github.com/Leo5661/codegen/blob/main/.github/ISSUE_TEMPLATE/feature_request.md).

## Making Changes

1. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/issue-number`.
2. Make your changes and ensure that the code follows the project's coding standards and guidelines.
3. Write tests for any new functionality or changes.
4. Run tests using `pnpm test` to ensure that they pass.
5. Commit your changes using descriptive commit messages: `git commit -m "feat: added new feature"` or `git commit -m "fix: resolved issue #123"`.
6. Push your changes to your forked repository: `git push origin feature/my-feature` or `git push origin bugfix/issue-number`.

## Submitting a Pull Request

1. Open a pull request against the `main` branch of the original repository.
2. Ensure your pull request includes a clear title and description of the changes you made.
3. Provide any additional information or context that could help with the review process.
4. Request reviews from maintainers or specific contributors, if needed.

## Code Reviews

All contributions will go through code reviews. Be prepared to make any necessary changes based on the feedback received.

## Additional Resources

- [Project Documentation](README.md)
- [Project Issue Tracker](https://github.com/Leo5661/codegen/issues)
- [GitHub Pull Request Documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

Thank you for contributing to RefLink a project by 0pen1labs!
