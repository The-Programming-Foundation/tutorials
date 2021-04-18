import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

const oop = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Object oriented programming">
      <h1>Object oriented programming</h1>
      <h3>Object-Oriented Programming refers to the use of the object in a programming language. These objects are entitled to real-world entities and bind the class, data, and functions in the same ecosystem.</h3>
      <IndexSection title="Core concepts">
        <IndexItemList lessonTopic={filter('oop')} />
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

export default oop;
