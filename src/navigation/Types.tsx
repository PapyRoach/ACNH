export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
  Test: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
