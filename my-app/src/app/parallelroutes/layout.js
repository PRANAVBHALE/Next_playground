import React from 'react';

function Layout(props) {
  return (
    <div>
      {props.children}
      {props.parallelone}
      {props.paralletwo}
    </div>
  );
}

export default Layout;
