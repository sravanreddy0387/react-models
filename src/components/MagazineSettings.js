import React, { Component } from 'react';
import { Name, Address, Teams } from './contents';
import Modal from './Modal'
export const MagazineSettings = (props) => {
    const { magazineSettings,  openModal, openEditModal } = props;
    function renderContent(propertyName) {
        switch (propertyName) {            
            case 'name':
                return <Name {...props} propertyName={propertyName} />
            case 'address':
                return <Address {...props} propertyName={propertyName} />
            case 'favourite teams':
                return <Teams {...props} propertyName={propertyName} />
            default:
                return null
        }
    }
    
    return (
        <div className="magazine-container">         
           
            <div className="magazine-settings">
            <h1>Magazine Settingss</h1>
                {
                    Object.keys(magazineSettings).map((propertyName, index) => {
                        return (
                            <div key={propertyName} className="magazine-content">
                                <div className="contents">
                                    <h3>{propertyName}</h3>
                                    {renderContent(propertyName)}
                                    </div>
                                    <button onClick={() => openEditModal(magazineSettings[propertyName], true)}>{magazineSettings[propertyName].buttonName}</button>
                                
                            </div>
                        )
                    })
                }
            </div>
            {openModal && <Modal {...props} /> }
        </div>
    )
}


export default MagazineSettings;