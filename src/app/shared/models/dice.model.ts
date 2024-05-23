export type DiceSet = {
  name: string;
  expansionId?: number;
  dice: Dice[];
};

export type Dice = {
  name: string;
  type: DiceType;
  expansionId?: number;
  sides?: (string | string[])[];

  /** Will be overwritten for multiselect dropdown */
  uuid?: string;
};

export type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'fancy';
