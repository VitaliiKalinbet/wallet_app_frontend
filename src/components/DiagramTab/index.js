import React from 'react';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  const {
    diagram,
    chartBlock,
    chartBlockHeader,
    diagramHeader,
    wrapper,
  } = styles;
  return (
    <div className={diagram}>
      <div className={diagramHeader}>
        <h2>Statistics</h2>
      </div>
      <div className={wrapper}>
        <div className={chartBlock}>
          <div className={chartBlockHeader}>
            <h2>Statistics</h2>
          </div>
          <div className="chart" />
        </div>
        <div className="table" />
      </div>
    </div>
  );
};

export default DiagramTab;
