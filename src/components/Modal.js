import React, { Component } from 'react';
import { EditNameModalContent, EditAddressModalContent, AddTeamsModalContent } from './contents'

export const Modal = (props) => {
    const { modalName, modalSettings, saveDeatils, cancelModal } = props;
    function renderModalContent() {
        switch (modalName) {
            case 'editName':
                return <EditNameModalContent {...props} />
            case 'editAddress':
                return <EditAddressModalContent {...props} />
            case 'addTeams':
                return <AddTeamsModalContent {...props} />
            default:
                return null
        }
    }
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="close" onClick={() => cancelModal()}>&times;</span>
                    <h1>{props[modalName].header}</h1>
                </div>
                <div className="modal-body">
                    {renderModalContent()}
                </div>
                <div className="modal-footer">
                    <button onClick={() => cancelModal()}>Cancel</button>
                    <button onClick={() => saveDeatils()}>Save</button>
                </div>
            </div>
        </div>
    )
}


export default Modal;