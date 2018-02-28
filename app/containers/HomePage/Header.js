import React from 'react';

const styles = {
  headerTitle: {
    fontSize: '32px',
    fontWeight: '900',
    lineHeight: '1.5',
    color: '#333',
    margin: '0 60px',
    marginTop: '40px',
  },
  addMemberBtn: {
    marginLeft: '20px',
    lineHeight: '24px',
  },
  addIcon: {
    fontSize: '24px !important',
    marginLeft: '5px',
  },
};

const Header = (props) => {
  return (
    <h2 style={styles.headerTitle}>
      Team Members
      <button
        className="primary font-14 vert-middle"
        style={styles.addMemberBtn}
        onClick={props.onToggleAddMemberModal}
      >
        <span>Add Members</span>
        <i className="material-icons color-white" style={styles.addIcon}>add</i>
      </button>
    </h2>
  );
};

export default Header;
