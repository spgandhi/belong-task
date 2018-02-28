import React from 'react';

const styles = {
  statusSelect: {
    marginLeft: '5px',
  },
  selects: {
    padding: '16px 69px',
  },
  addIcon: {
    verticalAlign: 'middle',
    marginLeft: '5px',
  },
  totals: {
    marginTop: '5px',
  },
};

const SecondaryHeader = (props) => {
  const { currentIndex, teamMembersCount, totalTeamMembers } = props;
  return (
    <div style={styles.selects} className="overflow-auto">
      <div className="pull-left">
        <select>
          <option>Company (2)</option>
          <option>Company 1</option>
          <option>Company 2</option>
        </select>
        <select style={styles.statusSelect}>
          <option>Status</option>
          <option value="active">Active</option>
          <option value="idle">Idle</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div className="pull-right" style={styles.totals}>
        Viewing {currentIndex + 1} - {Math.min(currentIndex + teamMembersCount, teamMembersCount)} of {totalTeamMembers}
        {/* <div>Next Page</div> */}
        {/* <div>Previous Page</div> */}
      </div>
    </div>
  );
};

export default SecondaryHeader;
