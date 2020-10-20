import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItem from '../../../components/IndexItem';

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Object oriented programming">
      <h1>Object oriented programming</h1>
      <h3>Object-Oriented Programming refers to the use of the object in a programming language. These objects are entitled to real-world entities and bind the class, data, and functions in the same ecosystem.</h3>
      <IndexSection title="Core concepts">
        <IndexItem to="/programming/oop/abstraction" title="Abstraction" subtitle="Hiding the unnecessary stuffs" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585022695913-YZ24K5FYX0RMXJEHXXGF/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/oop/inheritance" title="Inheritance" subtitle="Hierarchies" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585022138908-Y63WJMTTYRF13Z7BE1A5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/oop/encapsulation" title="Encapsulation" subtitle="Bindings" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585022354128-QLWM33O0032RPUKR6QY9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/oop/polymorphism" title="Polymorphism" subtitle="Forms" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585022561672-XB38AWZCYSB768P09CYJ/ke17ZwdGBToddI8pDm48kLClvqBQzoxFpMKnAwLVSht7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nQwvinDXPV4EYh2MRzm-RTRPcCVZpxbQHDYjLt73zWsGFOx8WNN_3833FE_kuT6Bg/image-asset.jpeg?format=500w"></IndexItem>
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
