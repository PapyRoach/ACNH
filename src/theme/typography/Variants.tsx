export type TypographyType = 'header' | 'iconLabel' | 'simple-text';

export const typos: Record<TypographyType, any> = {
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  'simple-text': {
    fontSize: 14,
    color: 'black',
  },
};
