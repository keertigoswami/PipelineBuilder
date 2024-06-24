

import React from 'react';

const Node = ({ data }) => {
  return (
    <div className={`${data.type}-node`}>
      {data.label}
    </div>
  );
};

export default Node;
