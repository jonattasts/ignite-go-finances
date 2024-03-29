import { Platform } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${Platform.OS === "ios" ? RFValue(113) : RFValue(100)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionsContainer = styled(GestureHandlerRootView)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
