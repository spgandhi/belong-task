import React from 'react';
import PropTypes from 'prop-types';
import localStorageDB from 'localstoragedb';
import AddMemberForm from './AddMemberForm';
import Header from './Header';
import SecondaryHeader from './SecondaryHeader';
import TeamMemberListing from './TeamMemberListing';


export class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.lib = new localStorageDB('library', localStorage);
    if (this.lib.isNew()) {
      // create the "books" table
      this.lib.createTable('teamMembers', ['name', 'company', 'status', 'lastUpdated', 'notes']);
      this.lib.commit();
    }

    this.state = {
      isAddMemberModal: false,
      teamMembers: this.lib.queryAll('teamMembers'),
      currentPage: 1,
      currentIndex: 0,
      sorting: 'none',
    };

    this.toggleAddMemberModal = this.toggleAddMemberModal.bind(this);
    this.handleDBUpdate = this.handleDBUpdate.bind(this);
    this.handleMemberDelete = this.handleMemberDelete.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  toggleAddMemberModal() {
    this.setState({ isAddMemberModal: !this.state.isAddMemberModal });
  }

  handleDBUpdate() {
    const self = this;
    
    // Timeout is added to make sure that the local DB has been updated
    // before querying
    setTimeout(() => {
      self.lib = new localStorageDB('library', localStorage);
      self.setState({ teamMembers: self.lib.queryAll('teamMembers') });
    }, 1000);
  }

  handleMemberDelete(ID) {
    this.lib.deleteRows('teamMembers', { ID });
    this.lib.commit();
    this.lib = new localStorageDB('library', localStorage);
    this.setState({ teamMembers: this.lib.queryAll('teamMembers') });
  }

  sortByName() {
    console.log('called');
    let sorting = '';
    if (this.state.sorting === 'none') sorting = 'ASC';
    if (this.state.sorting === 'ASC') sorting = 'DESC';
    if (this.state.sorting === 'DESC') sorting = 'ASC';

    this.setState({
      teamMembers: this.lib.queryAll('teamMembers', { sort: [['name', sorting]] }),
      sorting,
    });
  }

  render() {
    const { currentIndex, sorting, teamMembers } = this.state;
    return (
      <article>
        <AddMemberForm
          isAddMemberModal={this.state.isAddMemberModal}
          onModalClose={this.toggleAddMemberModal}
          onDBUpdate={this.handleDBUpdate}
        />
        <div className="white-bg">
          <Header onToggleAddMemberModal={this.toggleAddMemberModal} />
          <hr />
          <SecondaryHeader
            currentIndex={currentIndex}
            teamMembersCount={teamMembers.length}
            totalTeamMembers={teamMembers.length}
          />
        </div>
        <TeamMemberListing
          teamMembers={this.state.teamMembers}
          currentIndex={currentIndex}
          sorting={sorting}
          onMemberDelete={this.handleMemberDelete}
          onToggleAddMemberModal={this.toggleAddMemberModal}
          onSortByName={this.sortByName}
        />
      </article>
    );
  }
}

export default HomePage;
