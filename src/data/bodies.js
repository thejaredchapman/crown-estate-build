// Kerb weights and dimensions from TCV / carsales factory spec listings (Athlete V, 2WD, 4AT).
export const POWER_TARGET_WHP = 450;
export const STOCK_PS = 280;

export const BODIES = {
  estate: {
    id: 'estate',
    name: 'Estate',
    ja: 'エステート',
    chassis: 'JZS171W',
    style: '5-door wagon',
    production: 'Dec 1999 – 2003',
    length: 4835,
    width: 1765,
    height: 1510,
    wheelbase: 2780,
    weight: 1680,
    rearSpace: 'Open cargo bay to the tailgate',
  },
  sedan: {
    id: 'sedan',
    name: 'Sedan',
    ja: 'セダン',
    chassis: 'JZS171',
    style: '4-door sedan',
    production: 'Sep 1999 – 2003',
    length: 4820,
    width: 1765,
    height: 1455,
    wheelbase: 2780,
    weight: 1600,
    rearSpace: 'Sealed trunk behind rear seat',
  },
};

export const BODY_IDS = Object.keys(BODIES);

export const mm = (n) => `${n.toLocaleString('en-US')} mm`;
export const kg = (n) => `${n.toLocaleString('en-US')} kg`;
export const ratio = (mass, power) => (mass / power).toFixed(2);
