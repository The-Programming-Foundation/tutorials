import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

const c = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="C">
      <h1>C</h1>
      <h3>C is a general purpose programming language which can be used to build operating systems, modules for embedded systems and other wide range of computer applications.</h3>
      <IndexSection title="Core concepts">
        <IndexItemList lessonTopic={filter('c')} />
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

export default c;
