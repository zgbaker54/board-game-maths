export type DiceSet = {
  expansionId?: number;
  dice: Dice[];
};

export type Dice = {
  type: DiceType;
  expansionId?: number;
  sides?: (string | string[])[];
};

export type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'fancy';
