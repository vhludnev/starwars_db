import React from 'react';

import './row.css';

const Row = ({ leftEl, rightEl }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftEl}
      </div>
      <div className="col-md-6">
        {rightEl}
      </div>
    </div>
  );
}

export default Row;
