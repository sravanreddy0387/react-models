import * as types from '../constants';

export const openEditModal = (propertyName, flag) => {
    console.log('4', propertyName)
    return (dispatch, getState) => {
        dispatch({
            type: types.MODAL_HANDLE,
            modalName: propertyName.modal,
            openModal: flag
        })
    }
}
export const onInputChageHandlerEditName = (event) => {
    return (dispatch, getState) => {
        const data = getState().modals.editName;
        data.value = event.target.value
        dispatch({
            type: types.EDIT_NAME,
            data: data
        })
    }
}


export const onInputChageHandlerEditAddress = (event) => {
    return (dispatch, getState) => {
        const data = getState().modals.editAddress;
        data[event.target.name] = event.target.value
        dispatch({
            type: types.EDIT_ADDRESS,
            data: data
        })
    }
}

export const onInputAddTeams = (event, index) => {
    return (dispatch, getState) => {
        let addTeams = getState().modals.addTeams;
        addTeams.teams[index].value = event.target.value
        dispatch({
            type: types.ON_EDIT_TEAM,
            payload: {
                addTeams: addTeams
            }

        })

    }
}




export const cancelModal = () => {
    return (dispatch, getState) => {
        dispatch({
            type: types.CANCEL_MODAL,
            payload: {
                openModal: false
            }

        })
    }
}


export const saveDeatils = () => {
    return (dispatch, getState) => {
        let modal = getState().modals.modalName;
        let magazineSettings = getState().modals.magazineSettings;
        let editName = getState().modals.editName;
        let editAddress = getState().modals.editAddress;
        let addTeams = getState().modals.addTeams;

        if (modal === 'editName') {
            magazineSettings['name'].value = editName.value;
        } else if (modal === 'editAddress') {
            magazineSettings['address'].street = editAddress.street;
            magazineSettings['address'].city = editAddress.city;
            magazineSettings['address'].zip = editAddress.zip;
        } else if (modal === 'addTeams') {
            magazineSettings['favourite teams'].teams = addTeams.teams
        }

        dispatch({
            type: types.SAVE_MODAL,
            payload: {
                magazineSettings: magazineSettings
            }

        })


    }
}