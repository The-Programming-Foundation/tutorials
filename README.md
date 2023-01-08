## Development and Contribution Guide

### Website

Our Learn platform is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

Our Learn platform's repository, which includes content contributions from volunteers worldwide, is available under BSD-3-Clause License. See License at [LICENSE](https://github.com/The-Programming-Foundation/tutorials/blob/4.0/LICENSE). If you think our community/volunteer-generated contents infringe copyright, please let us know at [echo@smarterus.org](echo@smarterus.org)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. See License at https://github.com/facebook/docusaurus/blob/main/LICENSE
