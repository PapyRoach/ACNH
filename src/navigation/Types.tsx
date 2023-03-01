export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
