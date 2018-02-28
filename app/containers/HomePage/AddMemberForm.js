import React from 'react';
import PropTypes from 'prop-types';
import localStorageDB from 'localstoragedb';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

const styles = {
  modalDialog: {
    maxWidth: '500px',
    width: '100%',
    borderRadius: '5px',
  },
  form: {
    padding: '60px 60px',
  },
  label: {
    width: '100%',
    height: '32px',
    boxShadow: 'inset 0 1px 5px rgba(0, 0, 0, 0.2)',
    border: 'inset 1px #c6cbd4',
  },
  labelContainer: {
    marginBottom: '30px',
  },
  textarea: {
    height: '80px',
    boxShadow: 'inset 0 1px 5px rgba(0, 0, 0, 0.2)',
    border: 'inset 1px #c6cbd4',
  },
};

export default class AddTeamMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      notes: '',
      status: 'active',
      error: '',
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lib = new localStorageDB('library', localStorage);
  }

  handleModalClose() {
    this.props.onModalClose();
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, company, notes } = this.state;

    // Check for form errors
    let error = '';
    if (!name || name.length < 4) error = 'Name should be atleast 4 characters';
    if (!name || company.length < 2) error = 'Company should be atleast 2 characters';
    this.setState({ error });
    if (error.length > 0) return;

    const newTeamMember = {
      name,
      company,
      status,
      notes,
      lastUpdated: new Date(),
    };

    // Database insert
    this.lib.insert('teamMembers', newTeamMember);
    this.lib.commit();

    // Post database insert calls
    this.setState({
      name: '',
      company: '',
      status: 'active',
      notes: '',
      lastUpdated: '',
    });
    this.props.onDBUpdate(newTeamMember);
    this.handleModalClose();
  }

  render() {
    const { isAddMemberModal } = this.props;
    const { name, company, status, notes, error } = this.state;
    return (
      <div>
        {isAddMemberModal &&
          <ModalContainer onClose={this.handleModalClose}>
            {
              <ModalDialog onClose={this.handleModalClose} style={styles.modalDialog}>
                <form className="add-memeber-form" style={styles.form}>
                  <div style={styles.labelContainer}>
                    <label>
                      <div className="label">Name</div>
                      <input
                        type="text"
                        value={name}
                        style={styles.label}
                        onChange={this.handleInputChange}
                        name="name"
                      />
                    </label>
                  </div>
                  <div style={styles.labelContainer}>
                    <label>
                      <div className="label">Company</div>
                      <input
                        type="text"
                        value={company}
                        style={styles.label}
                        onChange={this.handleInputChange}
                        name="company"
                      />
                    </label>
                  </div>
                  <div style={styles.labelContainer}>
                    <label>
                      <div className="label">Status</div>
                      <select
                        type="text"
                        style={styles.label}
                        name="status"
                        onChange={this.handleInputChange}
                        value={status}
                      >
                        <option value="active">Active</option>
                        <option value="idle">Idle</option>
                        <option value="closed">Closed</option>
                      </select>
                    </label>
                  </div>
                  <div style={styles.labelContainer}>
                    <label>
                      <div>Notes</div>
                      <textarea
                        value={notes}
                        style={styles.textarea}
                        className="full-width notes-textarea"
                        onChange={this.handleInputChange}
                        name="notes"
                      />
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      className="primary font-14"
                      onClick={this.handleSubmit}
                    >
                      Add Member
                    </button>
                  </div>
                  <div className="error">{error}</div>
                </form>
              </ModalDialog>
            }
          </ModalContainer>
        }
      </div>
    );
  }
}
