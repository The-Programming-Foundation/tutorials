import React from "react";
import TreeMenu from "../components/treeMenu/TreeMenu";
import Layout from "../layout/Layout";
import { graphql } from "gatsby";

const treePage = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Learn Tree Menu">
      <TreeMenu />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default treePage;
