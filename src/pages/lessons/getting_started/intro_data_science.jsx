import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

const data_science = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Intro to Data Science">
      <h1>Intro to Data Science</h1>
      <h3>Data Science careers are one of the most highly compensated careers worldwide currently. Due to its broad application in every industry, there is a higher demand for data scientists who can analyze complex data and communicate the results effectively.

In this course, we will be covering the basics of data science and learning the tools used for data science from scratch. We will start the lessons at the beginner level and move up to the advanced level.</h3>
      <IndexSection title="Core lessons">
        <IndexItemList lessonTopic={filter('data_science')} />
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

export default data_science;
