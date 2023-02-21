export interface Fish {
  id: number;
  name: {
    'name-USen': string;
    'name-EUfr': string;
  };
  availability: {
    'month-northern': string;
    'month-southern': string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: string;
    'month-array-northern': Array<number>;
    'month-array-southern': Array<number>;
  };
  shadow: string;
  price: number;
  'price-cj': number;
  icon_uri: string;
  image_uri: string;
}
