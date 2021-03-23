import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Python">
      <h1>Python</h1>
      <h3>Python is a high-level language for general purpose programming.</h3>
      <IndexSection title="Core concepts">
       <IndexItemList lessonTopic={filter('python')} />
      </IndexSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
