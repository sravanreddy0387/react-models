import React, { Component } from 'react';

export const Name = (props) => {
    const { magazineSettings, propertyName } = props;
    return (
        <p>{magazineSettings[propertyName].value}</p>
    )
}


export const Address = (props) => {
    const { magazineSettings, propertyName } = props;
    return (
        <p><span>{magazineSettings[propertyName].street}</span>
            <span>{magazineSettings[propertyName].city} &nbsp; {magazineSettings[propertyName].zip}</span>
        </p>

    )
}


export const Teams = (props) => {
    const { magazineSettings, propertyName } = props;
    return (
        <div>
            {magazineSettings[propertyName].teams.map((team, i) => {
                return <p key={i}>{team.value}</p>
            })}
        </div>

    )
}



export const EditNameModalContent = (props) => {
    const { modalName, modalSettings, onInputChageHandlerEditName, magazineSettings } = props;
    return (
        <div className="">
            <label>Name</label>
            <input name="value" defaultValue={magazineSettings.name.value} type="text" onChange={(event) => onInputChageHandlerEditName(event)} />
        </div>
    )
}


export const EditAddressModalContent = (props) => {
    const { modalName, editAddress, onInputChageHandlerEditAddress, magazineSettings } = props;
    return (
        <div className="">
            <label>Street</label>
            <input name="street" type="text" defaultValue={magazineSettings.address.street} onChange={(event) => onInputChageHandlerEditAddress(event)} />
            <label>city</label>
            <input name="city" type="text" defaultValue={magazineSettings.address.city} onChange={(event) => onInputChageHandlerEditAddress(event)} />
            <label>Zip</label>
            <input name="zip" defaultValue={magazineSettings.address.zip} type="number" onChange={(event) => onInputChageHandlerEditAddress(event)} />
        </div>
    )
}

export const AddTeamsModalContent = (props) => {
    const { modalName, addTeams, onInputAddTeams } = props;
    
    return (
        <div className="">
            <h3>Add teams</h3>
            {addTeams.teams.map((team, index) => {
                return (
                    <div key={index} > <input type="text"
                        onChange={(event) => onInputAddTeams(event, index)} />
                    </div>
                )
            })
            }

        </div>
    )
}