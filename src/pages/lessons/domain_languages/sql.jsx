import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

const sql = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="SQL">
      <h1>SQL</h1>
      <h3>SQL stands for <b>Structured Query Language</b>. Often it is pronounced as <b>sequel</b>.

      SQL is a language used to store, access, and manage the data in the database. SQL is considered a standard; however, different versions of the SQL language are different. But all versions of SQL will follow the standard, and hence they all support at least the significant commands with slight variations in the syntax.</h3>

<h5><b>Evolving Series Author:</b> Sharada Prasad | Content Contributor at The Programming Foundation</h5>
      <IndexSection title="Core modules">
        <IndexItemList lessonTopic={filter('sql')} />
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

export default sql;
