import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import MagazineSettings from './MagazineSettings';
import {initialState } from '../reducers/modals'

describe('<AppContainer />', function () {
    const wrapper = shallow(<MagazineSettings />);
    let props =  {...initialState}

  it('should have an header component ', function () {    
    expect(wrapper.find('.magazine-container')).to.have.length(1);
  });

  
  
});