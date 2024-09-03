import { castingShadowsMetadata } from './casting-shadows.metadata';
import { doomlingsMetadata } from './doomlings.metadata';
import { hereToSlayMetadata } from './here-to-slay.metadata';
import { monopolyDealMetadata } from './monopoly-deal.metadata';
import { nemesisMetadata } from './nemesis.metadata';
import { sevenWondersMetadata } from './seven-wonders.metadata';
import { simpleMetadata } from './simple.metadata';
import { wingspanMetadata } from './wingspan.metadata';

export const gameList = [
  {
    label: 'Basic Cards & Dice',
    routerLink: '/basic',
    metadata: simpleMetadata,
  },
  {
    label: 'Monopoly Deal',
    routerLink: '/monopoly-deal',
    metadata: monopolyDealMetadata,
  },
  {
    label: '7 Wonders',
    routerLink: '/7-wonders',
    metadata: sevenWondersMetadata,
  },
  {
    label: 'Here to Slay',
    routerLink: '/here-to-slay',
    metadata: hereToSlayMetadata,
  },
  {
    label: 'Casting Shadows',
    routerLink: '/casting-shadows',
    metadata: castingShadowsMetadata,
  },
  {
    label: 'Wingspan',
    routerLink: '/wingspan',
    metadata: wingspanMetadata,
  },
  {
    label: 'Doomlings',
    routerLink: '/doomlings',
    metadata: doomlingsMetadata,
  },
  {
    label: 'Nemesis',
    routerLink: '/nemesis',
    metadata: nemesisMetadata,
  }
];
