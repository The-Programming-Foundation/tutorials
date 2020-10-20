import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItem from '../../../components/IndexItem';

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="C">
      <h1>C</h1>
      <h3>C is a general purpose programming language which can be used to build operating systems, modules for embedded systems and other wide range of computer applications.</h3>
      <IndexSection title="Core concepts">
        <IndexItem to="/programming/c/structure" title="Structure" subtitle="Structure of the program" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1583705866397-A6LNCTH6YF8UM0D25LQL/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/c/hello-earth" title="Hello Earth" subtitle="Printing a statement" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1583706070494-RKFKGUMQTEYYMJ8P3AT9/ke17ZwdGBToddI8pDm48kH_uwxGOYX5bivALGm05uZJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0o8OMvY5tuV_wqZQCqqStn4KIrOGbVMte_dx5txYAcAiYRCymfPHcwrRJHBuR8xPlA/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/c/calculation" title="Calculation" subtitle="Calculating numbers" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1583723141864-VOAC613RIUA0C1CRT8HV/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/c/expansion" title="Expansion" subtitle="Expanded functionalities" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1583723326813-U9991RW4L6HCNUUJ3J0P/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/image-asset.jpeg?format=500w"></IndexItem>
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
