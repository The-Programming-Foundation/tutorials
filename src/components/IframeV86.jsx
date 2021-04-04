import React from 'react';

export default ({ title }) => {

  function handleIframeSrc(area) {
    const regex1 = /^Unix.+/;
    const regex2 = /^C.+/;
    const regex3 = /^Python.+/;

    switch (true) {
      case regex1.test(area):
        return "https://peaceful-bohr-249ea0.netlify.app/";

      case regex2.test(area):
        return "https://peaceful-bohr-249ea0.netlify.app/c.html";

      case regex3.test(area):
        return "https://peaceful-bohr-249ea0.netlify.app/images/emulation/python.html";

      default:
        return "https://peaceful-bohr-249ea0.netlify.app/";
    }
  }

  return (
    <div>
      <p><b>Try it yourself (press enter when asked)</b></p>
      <iframe title={title} src={handleIframeSrc(title)} width="1000" height="1000"></iframe>
    </div>
  );
}
