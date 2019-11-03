import styled from 'styled-components/native';

import colors from '../../styles/color';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const PageName = styled.Text`
  font-size: 36px;
  font-weight: bold;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  align-self: center;
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
