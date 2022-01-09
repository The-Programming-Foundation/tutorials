import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Note from "../components/Note";
import CodeEditor from "../components/CodeEditor";
import CodeLabLayout from "../components/CodeLabLayout";
import GoBackButton from "../components/treeMenu/GoBackButton";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "../style/style.css";

const globalComponents = { Note, CodeEditor, CodeLabLayout };

export default function Post({ data: { site, mdx }, pageContext }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Layout site={site} pageTitle={mdx.frontmatter.title}>
              {window.innerWidth >= 1000 &&
                sessionStorage.getItem("lastExpandedNode") && <GoBackButton />}
              <MDXProvider components={globalComponents}>
                <MDXRenderer>{pageContext.body}</MDXRenderer>
              </MDXProvider>
            </Layout>
          </Col>
        </Row>
      </Container>
    </>
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
