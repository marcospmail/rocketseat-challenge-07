import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  BasketContainer,
  Logo,
  ItemCount,
  LogoWrapper,
} from './styles';

class Header extends Component {
  state = {};

  render() {
    const { cartSize, navigation } = this.props;

    return (
      <Wrapper>
        <Container>
          <LogoWrapper onPress={() => navigation.navigate('Home')}>
            <Logo />
          </LogoWrapper>
          <BasketContainer onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" color="#FFF" size={24} />
            <ItemCount>{cartSize}</ItemCount>
          </BasketContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
