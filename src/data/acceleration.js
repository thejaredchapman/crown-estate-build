// Estimated 0–60 mph from a simple point-mass simulation. No measured times exist for the
// JZS171, so both bodies run through the same model and only their mass differs.

const G = 9.81;
const MPH_60 = 26.82; // m/s
const DT = 0.001;

export const ACCEL_ASSUMPTIONS = {
  driverKg: 75,
  avgPowerShare: 0.8,    // average power through each gear vs peak
  rearLoadShare: 0.56,   // rear axle share under launch, ~47% static plus weight transfer
  dragArea: 0.3 * 2.2,   // Cd × frontal area, m²
  rolling: 0.015,
};

export const SETUPS = {
  stock: {
    label: 'Stock',
    wheelKw: 206 * 0.8,  // 280 PS crank, ~20% loss through the 4-speed auto
    grip: 0.9,           // factory 16" tyres
    shifts: 1,
    shiftSec: 0.25,      // torque-converter auto, near-seamless
  },
  built: {
    label: 'Built',
    wheelKw: 450 * 0.7457,
    grip: 1.05,          // wider, stickier rubber + Torsen LSD
    shifts: 1,           // R154 2nd gear runs past 60 mph on a 4.10 diff
    shiftSec: 0.4,       // manual shift
  },
};

export function zeroToSixty(kerbKg, setup) {
  const a = ACCEL_ASSUMPTIONS;
  const m = kerbKg + a.driverKg;
  const power = setup.wheelKw * 1000 * a.avgPowerShare;
  const tractionLimit = setup.grip * m * G * a.rearLoadShare;
  let v = 0;
  let t = 0;
  while (v < MPH_60) {
    const drive = Math.min(tractionLimit, power / Math.max(v, 0.1));
    const resist = 0.5 * 1.2 * a.dragArea * v * v + a.rolling * m * G;
    v += ((drive - resist) / m) * DT;
    t += DT;
  }
  return t + setup.shifts * setup.shiftSec;
}

export const fmtSec = (s) => `${s.toFixed(1)} s`;
