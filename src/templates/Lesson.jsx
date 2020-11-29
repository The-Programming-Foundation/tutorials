import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import Note from '../components/Note';
import CodeEditor from '../components/CodeEditor';
import EditorSplitScreen from '../components/EditorSplitScreen';

const globalComponents = { Note, CodeEditor };

export default function Post({ data: { site, mdx }, pageContext }) {
  return (
    <Layout site={site} pageTitle={mdx.frontmatter.title}>
      <EditorSplitScreen>
        <MDXProvider components={globalComponents}>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </MDXProvider>
      </EditorSplitScreen>
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
