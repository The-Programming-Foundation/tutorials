import React from 'react';
import Layout from '../layout/Layout';
import IndexSection from '../components/IndexSection';
import IndexItem from '../components/IndexItem';

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Learn">
      <IndexSection title="Operating Systems">
        <IndexItem to="/lessons/os/unix" title="Unix" subtitle="An operating system" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1582612021859-DO0PIXR9DYGQEF46B6PA/ke17ZwdGBToddI8pDm48kNieQx9KL1evre9Hd4ljT6d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0g9xiYCO_4ze-uEG5pWlE5NgKb-p0Dd42f6sHlMt4hzAejhns344gPXv5yMHayH2Hw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/os/vim" title="Vim" subtitle="A text editor" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581829260732-4AD8IRF1X3Z558RJU8F9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/os/kernel" title="Kernel" subtitle="The core of an operating system" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581829485790-UJP5E5LMKCAQK7CH9078/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=500w"></IndexItem>
      </IndexSection>
      <IndexSection title="Programming">
        <IndexItem to="/lessons/programming/c" title="C" subtitle="A general purpose programming language" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581811705530-X1G32U20RTWIRWK46SHP/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/lessons/programming/python" title="Python" subtitle="A high-level programming language for general purpose programming" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581825924842-MET363P2K0V5DHM25K3E/ke17ZwdGBToddI8pDm48kIK1RqlxOH0feb2s6eaQaPx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4ItMlUScqTrNl4Qam9qClu3p72N-Hx3V_QwM4ngpqU4bA/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/lessons/programming/oop" title="Object oriented programming" subtitle="A practical way to approach programming" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581826071214-K7OAQ9AY2KM9LIUGJ8EB/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/programming/algorithm" title="Algorithm" subtitle="Instructing the computer in different ways" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581826369804-ZUVGF630H9NRY1CQVGPY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=500w"></IndexItem>
      </IndexSection>
      <IndexSection title="Logic">
        <IndexItem to="/logic/binaries" title="Binaries" subtitle="Computer only understands zeros and ones" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581830587778-B1T9S9GLSOQEA6MZ4JWJ/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/image-asset.jpeg?format=500w"></IndexItem>
        <IndexItem to="/logic/gates" title="Gates" subtitle="Logical operations using binaries" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1581830485164-MMFAJZ60IGUVVF9WWWBO/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
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
