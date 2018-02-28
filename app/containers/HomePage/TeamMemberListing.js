import React from 'react';
import TeamMemberRow from './TeamMemberRow';
import TableHeader from './TableHeader';

export default class TeamMemberListing extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeSelection: [],
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(selectionID) {
    const activeSelection = this.state.activeSelection;
    const index = this.state.activeSelection.findIndex((ID) => ID === selectionID);
    if (index !== -1) {
      activeSelection.splice(index, 1);
    } else {
      activeSelection.push(selectionID);
    }
    this.setState({ activeSelection });
  }

  render() {
    const { teamMembers, currentIndex, sorting, onMemberDelete,
      onSortByName, onToggleAddMemberModal } = this.props;
    return (
      <div className="table">
        <table className="full-width" cellPadding="0" cellSpacing="0">
          <TableHeader onSortByName={onSortByName} />
          <tbody>
            {teamMembers.slice(currentIndex, currentIndex + 10).map((member) => (
              <TeamMemberRow
                member={member}
                key={member.ID}
                onDelete={onMemberDelete}
                onSelection={this.handleSelection}
              />
            ))}
          </tbody>
        </table>
        {
          teamMembers.length === 0 &&
          <div style={{ marginTop: '5px' }}>
            No Team Members found.
            Click <a href="#" onClick={onToggleAddMemberModal}>here</a> to add a new team member.
          </div>
        }
      </div >

    );
  }
}
