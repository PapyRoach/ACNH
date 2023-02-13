export type typosType = 'header' | 'iconLabel';

export const typos: Record<typosType, any> = {
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 14,
  },
};
