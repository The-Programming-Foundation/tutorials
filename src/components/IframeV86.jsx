import React from 'react';

export default ({title}) => {
  return (
    <div>
      <p><b>Try it yourself:</b></p>  
      <iframe title={title} src="https://sad-raman-a7139b.netlify.app/" width="600" height="1000"></iframe>
    </div>
  );
}
