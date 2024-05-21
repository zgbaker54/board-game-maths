export type DiceSet = {
  dice: Dice[];
};

export type Dice = {
  type: DiceType;
  sides?: string[];
};

export type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'fancy';
