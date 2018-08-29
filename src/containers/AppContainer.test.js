import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import HeaderComponent from '../components/HeaderComponent';
import MagazineSettings from '../components/MagazineSettings';
import AppContainer from './AppContainer';

describe('<AppContainer />', function () {
  it('should have an header component ', function () {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper.find(HeaderComponent)).to.have.length(1);
  });

  it('should have an header component ', function () {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper.find(MagazineSettings)).to.have.length(1);
  });

  
});