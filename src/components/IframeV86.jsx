import React from 'react';

export default ({title}) => {
  return (
    <div>
      <p><strong>Try:</strong></p>  
      <iframe title={title} src="https://sad-raman-a7139b.netlify.app/" width="1200" height="100"></iframe>
    </div>
  );
}
