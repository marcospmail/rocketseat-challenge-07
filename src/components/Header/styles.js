import styled from 'styled-components/native';

import colors from '../../styles/color';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const LogoWrapper = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background: ${colors.primary};
  color: #fff;
  padding: 2px;
  font-size: 12px;
`;
