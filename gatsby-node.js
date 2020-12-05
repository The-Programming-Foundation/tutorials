const path = require('path');

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          body
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return actions.panic(errors);
    }

    data.allMdx.nodes.forEach((node) => {
      actions.createPage({
        path: node.slug,
        component: path.resolve('./src/templates/Lesson.jsx'),
        context: {
          id: node.id,
          body: node.body,
        },
      });
    });
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-ace/, 
            use: loaders.null(),
          },
          {
            test: /ace/, 
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
