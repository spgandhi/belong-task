/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { TeamMemberRow } from './TeamMemberRow';

const styles = {
  headerTitle: {
    fontSize: '32px',
    fontWeight: '900',
    lineHeight: '1.5',
    color: '#333',
    margin: '0 60px',
  },
  addMemberBtn: {
    marginLeft: '20px',
  },
  statusSelect: {
    marginLeft: '5px',
  },
  selects: {
    margin: '0 60px',
  },
};

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Belong | Task</title>
          <meta name="description" content="Belong Task on react.js" />
        </Helmet>
        <div>
          <h2 style={styles.headerTitle}>
            Team Members
            <button
              className="primary font-14 vert-middle"
              style={styles.addMemberBtn}
            >
              <span>Add Members</span>
              <i className="material-icons color-white font-14">add</i>
            </button>
          </h2>

          <hr />

          <div style={styles.selects} className="overflow-auto">
            <div className="pull-left">
              <select>
                <option>Company (1)</option>
                <option>Helo World</option>
                <option>Cello World</option>
              </select>
              <select style={styles.statusSelect}>
                <option>Status</option>
                <option>Open</option>
                <option>CLose</option>
              </select>
            </div>
            <div className="pull-right">
              Viewing 1 - 20 of 36
            </div>
          </div>

          <div className="table">
            <table className="full-width" border="0" padding="0" cellPadding="0">
              <thead>
                <tr className="table-header">
                  <td style={{ width: '5%' }}></td>
                  <td style={{ width: '15%' }}>Name</td>
                  <td style={{ width: '15%' }}>Company</td>
                  <td style={{ width: '15%' }}>Status</td>
                  <td style={{ width: '15%' }}>Last Updated</td>
                  <td style={{ width: '30%' }}>Notes</td>
                  <td style={{ width: '5%' }}></td>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <TeamMemberRow member={member} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    );
  }
}

const teamMembers = [
  {
    name: 'Shreyans',
    company: 'Aerobubble',
    status: 'open',
    lastUpdated: '12:37 PM',
    notes: 'Good!',
  },
  {
    name: 'Rish',
    company: 'Aerobubble',
    status: 'open',
    lastUpdated: '12:37 PM',
    notes: 'Good!',
  },
  {
    name: 'Shreyans',
    company: 'Aerobubble',
    status: 'open',
    lastUpdated: '12:37 PM',
    notes: 'Good!',
  },
];

export default HomePage;
