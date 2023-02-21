export type typosType = 'header' | 'iconLabel' | 'simple-text';

export const typos: Record<typosType, any> = {
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 14,
  },
  'simple-text': {
    fontSize: 14,
  },
};
