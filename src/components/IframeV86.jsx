import React from 'react';

export default ({ title }) => {
  return (
    <div>
      <p><b>Try it yourself (press enter when asked)</b></p>
      <iframe title={title} src="https://peaceful-bohr-249ea0.netlify.app/" width="1000" height="1000"></iframe>
    </div>
  );
}
