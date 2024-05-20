import { castingShadowsMetadata } from './casting-shadows.metadata';
import { hereToSlayMetadata } from './here-to-slay.metadata';
import { monopolyDealMetadata } from './monopoly-deal.metadata';
import { sevenWondersMetadata } from './seven-wonders.metadata';

export const gameList = [
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
];
