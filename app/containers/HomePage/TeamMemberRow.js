import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from 'react-dd-menu';
import localStorageDB from 'localstoragedb';

export default class TeamMemberRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isSelected: false,
    };
    this.click = this.click.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onSelectClick = this.onSelectClick.bind(this);

    this.lib = new localStorageDB('library', localStorage);
  }

  componentWillReceiveProps() {
    console.log('new Props');
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  click() {
    console.log('You clicked an item');
  }

  handleDelete() {
    this.props.onDelete(this.props.member.ID);
  }

  onSelectClick() {
    this.setState({ isSelected: !this.state.isSelected });
    this.props.onSelection(this.props.member.ID);
  }

  render() {
    const { member } = this.props;
    const { isSelected } = this.state;
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      // toggle: <button type="button" onClick={this.toggle}>Click me!</button>,
      align: 'right',
    };
    const lastUpdated = new Date(member.lastUpdated);
    return (
      <tr className="table-row">
        <td className="text-center first-cell">
          <input type="checkbox" onClick={this.onSelectClick} checked={isSelected} />
        </td>
        <td>{member.name}</td>
        <td>{member.company}</td>
        <td>{member.status}</td>
        <td>{lastUpdated.getDate()}/{lastUpdated.getMonth() + 1}/{lastUpdated.getFullYear()}</td>
        <td>{member.notes}</td>
        <td className="pos-relative">
          <i className="material-icons" onClick={this.toggle}>more_vert</i>
          <DropdownMenu {...menuOptions}>
            <div><i className="material-icons font-14 icon-margin-right">mode_edit</i>Edit</div>
            <div onClick={this.handleDelete}><i className="material-icons font-14 icon-margin-right">delete</i>Delete</div>
          </DropdownMenu>
        </td>
      </tr>
    );
  }
}
