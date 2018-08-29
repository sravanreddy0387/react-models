import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent';
import MagazineSettings from '../components/MagazineSettings';
import Modal from '../components/Modal';
import { openEditModal, onInputChageHandlerEditAddress, onInputChageHandlerEditName, onInputAddTeams,  saveDeatils, cancelModal } from '../actions/modalActions'


class AppContainer extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { openModal, addTeams } = this.props;
    return (
      <div className="App">
        <HeaderComponent />
        <MagazineSettings {...this.props} />
        {addTeams.teams.length}
        {openModal && <div className='modal-ovrlay'></div>}
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => bindActionCreators({
  openEditModal: openEditModal,
  onInputChageHandlerEditName: onInputChageHandlerEditName,
  onInputChageHandlerEditAddress: onInputChageHandlerEditAddress,
  onInputAddTeams: onInputAddTeams,
  saveDeatils: saveDeatils,
  cancelModal: cancelModal
}, dispatch)

function mapStateToProps(state) {
  console.log('31', state)
  return {
    magazineSettings: state.modals.magazineSettings,
    openModal: state.modals.openModal,
    modalName: state.modals.modalName,
    editName: state.modals.editName,
    editAddress: state.modals.editAddress,
    addTeams: state.modals.addTeams,
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)


