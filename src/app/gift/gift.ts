export interface Gift {
  id: number;
  name: string;
  image: string;
};


export function getGifts(): Gift[] {
  const MOCK_GIFT = [
    'Teddy',
    'Car',
    'Barbie',
    'Yoyo',
    'Gundam',
    'Kitchen Toy',
    'Dough',
    'Lego',
    'Xylophone',
    'Mickey Mouse',
  ];
  return MOCK_GIFT.map((v, i) => (
    {
      id: i,
      name: v,
      image: `/assets/images/${v.toLocaleLowerCase().replace(/\s/g, '_')}.jpg`,
    }
  ));
}
