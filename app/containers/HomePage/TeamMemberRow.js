import React from 'react';
import PropTypes from 'prop-types';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class TeamMemberRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditModal: false,
      isSelected: false,
    };
  }

  render() {
    const { member } = this.props;
    return (
      <tr className="table-row">
        <td className="text-center"><input type="checkbox" /></td>
        <td>{member.name}</td>
        <td>{member.company}</td>
        <td>{member.status}</td>
        <td>{member.lastUpdated}</td>
        <td>{member.notes}</td>
        <td><i className="material-icons">more_vert</i></td>
      </tr>
    );
  }
}
