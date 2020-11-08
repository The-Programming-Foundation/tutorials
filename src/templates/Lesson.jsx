import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import Note from '../components/Note';

const globalComponents = { Note };

export default function Post({ data: { site, mdx }, pageContext }) {
  console.log('Hello World');
  return (
    <Layout site={site} pageTitle={mdx.frontmatter.title}>
      <MDXProvider components={globalComponents}>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
      }
    }
  }
`;
