import React from 'react';
import PropTypes from 'prop-types';
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
    height: '80px !important',
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
      status: '',
      error: '',
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.onModalClose();
  }

  handleInputChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, company, notes } = this.state;
    let error = '';
    if (!name || name.length < 4) error = 'Name should be atleast 4 characters';
    if (!name || company.length < 2) error = 'Company should be atleast 2 characters';
    this.setState({ error });
    if (error.length > 0) return;

    const teamMember = {
      name,
      company,
      status,
      notes,
    };

    console.log(teamMember);
  }

  render() {
    return (
      <div>
        {this.props.isAddMemberModal &&
          <ModalContainer onClose={this.handleClose}>
            {
              <ModalDialog onClose={this.handleClose} style={styles.modalDialog}>
                <form className="add-memeber-form" style={styles.form}>
                  <div style={styles.labelContainer}>
                    <label>
                      <div className="label">Name</div>
                      <input
                        type="text"
                        value={this.state.name}
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
                        value={this.state.company}
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
                      >
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                      </select>
                    </label>
                  </div>
                  <div style={styles.labelContainer}>
                    <label>
                      <div className="label">Notes</div>
                      <textarea
                        value={this.state.notes}
                        style={styles.textarea}
                        className="full-width"
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
                  {this.state.error}
                </form>
              </ModalDialog>
            }
          </ModalContainer>
        }
      </div>
    );
  }
}
