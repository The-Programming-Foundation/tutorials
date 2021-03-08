import React from 'react';
import Layout from '../layout/Layout';
import IndexSection from '../components/IndexSection';
import IndexItemList from '../components/IndexItemList';
import LessonTopic from '../data/LessonTopic';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}
export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Learn">
      <IndexSection title="Operating Systems">
         <IndexItemList lessonTopic={filter('operatingsystem')} />
      </IndexSection>
      <IndexSection title="Programming">
         <IndexItemList lessonTopic={filter('programming')} />
      </IndexSection>
      <IndexSection title="Logic">
        <IndexItemList lessonTopic={filter('logic')} />
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
