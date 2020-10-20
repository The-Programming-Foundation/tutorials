import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItem from '../../../components/IndexItem';

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Python">
      <h1>Python</h1>
      <h3>Python is a high-level language for general purpose programming.</h3>
      <IndexSection title="Core concepts">
        <IndexItem to="/programming/python/structure" title="Structure" subtitle="Structure of the program" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585021265794-911SECAM23XQLIEGLDQZ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/python/hello-earth" title="Hello Earth" subtitle="Displaying an output" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585021436459-ZP0VUL56EDKGM80B8ABV/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/python/calculation" title="Calculation" subtitle="Calculating numbers" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585021372063-A6UGUOFVUGXZNSX0ILJU/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/python/expansion" title="Expansion" subtitle="Expanded functionalities" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1585722698930-T8TYFL74OS2UZES0C4N3/ke17ZwdGBToddI8pDm48kFQjgsZ4YX2MPjYhYa0gYA97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4XabXLlNWpcJMv7FrN_NJ9AAnuqPO6283_GrIBRQsPMpi0GZwhwBwybpQV6zSS3A/image-asset.jpeg?format=500w"></IndexItem>
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
