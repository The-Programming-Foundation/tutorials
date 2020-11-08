import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItem from '../../../components/IndexItem';
import ReduxTestTemplate from '../../../templates/ReduxTestTemplate';

export default ({ data: { site, mdx } }) => {
  return (
      <Layout site={site} pageTitle="Unix">
        <ReduxTestTemplate>
        <h1>Unix</h1>
        <h3>The Unix operating system was developed by Ken Thompson, Dennis Ritchie in 1970 at Bell Labs research center. It was created to be a stable, multi-user and multi-tasking system for desktops and servers.</h3>
        <IndexSection title="Core concepts">
          <IndexItem to="/os/unix/structure" title="Structure" subtitle="Components of Unix" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1582610978752-BCZTT8FININRVJ9XU357/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
          <IndexItem to="/os/unix/file-structure" title="Unix file structure" subtitle="File system" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1582611416303-XGBNQBJWSWJ0K2PRY3BX/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/image-asset.jpeg?format=500w"></IndexItem>
          <IndexItem to="/os/unix/shell" title="Unix shell" subtitle="Navigating the operating system" img="https://images.squarespace-cdn.com/content/v1/5e3e5ab0244c110e4de138d4/1582611240800-NPL7G88SHN3AF53VFHB4/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></IndexItem>
        </IndexSection>
        </ReduxTestTemplate>

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
