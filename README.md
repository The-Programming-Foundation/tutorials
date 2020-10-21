# The Programming Foundation

## Structure
This repository is split into two main content folders, `lessons` and `src`.

The `lessons` folder is the primary resource for content contributors. If you would like to add a lesson, you may add an [MDX](https://mdxjs.com/) file anywhere under that folder and Gatsby will automatically create a page matching that address.
- You may use HTML or React anywhere in the markdown, anything that is MDX compliant.
- Please include a "frontmatter" title for the page. This is just a three dash block at the beginning of the page. See the [Binaries](https://raw.githubusercontent.com/The-Programming-Foundation/learn-content/master/lessons/logic/binaries/index.mdx) lesson for an example.
- If you would like to include images, we recommend that you create an `images` folder alongside your MDX to house all lesson content together. Once you add images to your folder, you can simple reference the image using standard markdown notation to have it built right in.

The `src` folder houses several subfolders:
- The `components` folder is for custom components. These files can be lesson supporting components such as styling blocks to terminals.
- The `layout` folder is for the global styling.
- The `pages` folder are standalone pages such as lesson directories. These files allow us to have fine-grain control if we want to display something a little bit more complex.

## Development

### Setup
To run this repository, follow these instructions:
- Clone the repository locally
- Install NodeJS and NPM globally
- Run `npm install -g gatsby-cli` to install the Gatsby CLI

### Running
- Run `gatsby develop` to run the hot reload server
- Enjoy the local server at `http://localhost:8000`
- View `http://localhost:8000/___graphql` for the local GraphQL introspection service
- Run `gatsby build` to generate a production build
