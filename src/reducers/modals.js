import * as types from '../constants';

export const initialState = {
    magazineSettings: {
        'name': {
            modal: 'editName',
            value: 'Johny Smith',
            buttonName: 'edit name'
        },
        'address': {
            modal: 'editAddress',
            street: '123 bowl lane',
            city: 'New York',
            zip: 12345,
            buttonName: 'edit address'
        },
        'favourite teams': {
            teams: [],
            modal: 'addTeams',
            buttonName: 'Add team'
        }
    },
    openModal: false,
    modalName: '',
    editName: {
        header: 'Edit Name',
        value: ''
    },
    editAddress: {
        header: 'Edit Address',
        street: '',
        city: '',
        zip: ''
    },
    addTeams: {
        header: 'Add Teams',
        teams: [{
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        }]
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.MODAL_HANDLE:
            return {
                ...state,
                modalName: action.modalName,
                openModal: action.openModal
            }
        case types.INPUT_CHANGE:
            return {
                ...state,
                modalSettings: action.modalUpdate
            }
        case types.EDIT_NAME:
            return {
                ...state,
                editName: action.data
            }
        case types.EDIT_ADDRESS:
            return {
                ...state,
                editAddress: action.data

            }
        case types.SAVE_MODAL:
            return {
                ...state,
                magazineSettings: action.payload.magazineSettings,
                openModal: false
            }
        case types.CANCEL_MODAL:
            return {
                ...state,
                openModal: false
            }
        case types.ON_EDIT_TEAM:
            return {
                ...state,
                addTeams: action.payload.addTeams
            }

        default:
            return state
    }
}