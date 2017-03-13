import { Gift } from '../gift/gift';

export enum MessageType {
  BirthdayWish = 1,
  BirthCongratulation = 2,
};

export interface Message {
  id: number;
  type: MessageType;
  message?: string;
  babyname?: string;
  birthdate?: Date;
  gift?: Gift;
};

export function getMessages(): { pending: Message[], processed: Message[] } {
  const nextId = (() => {
    let _id = 0;
    return () => ++_id;
  })();
  const rand = (n: number) => Math.floor(Math.random() * n);
  const mockMessageFactory = (idx: number) => ({
    id: nextId(),
    type: idx % 2 === 0 ? MessageType.BirthdayWish : MessageType.BirthCongratulation,
  });
  const shuffle = () => rand(2) - rand(2);
  const pending: Message[] = Array(rand(5) + 5).fill(0).map((v, i) => mockMessageFactory(i)).sort(shuffle);
  const processed: Message[] = [];
  return { pending, processed };
}

export function getNames(): string[] {
  return [
    'Amelia',
    'Olivia',
    'Emily',
    'Ava',
    'Isla',
    'Jessica',
    'Poppy',
    'Isabella',
    'Sophie',
    'Mia',
    'Ruby',
    'Lily',
    'Grace',
    'Evie',
    'Sophia',
    'Ella',
    'Scarlett',
    'Chloe',
    'Isabelle',
    'Freya',
    'Oliver',
    'Jack',
    'Harry',
    'Jacob',
    'Charlie',
    'Thomas',
    'Oscar',
    'William',
    'James',
    'George',
    'Alfie',
    'Joshua',
    'Noah',
    'Ethan',
    'Muhammad',
    'Archie',
    'Leo',
    'Henry',
    'Joseph',
    'Samuel',
  ];
}
