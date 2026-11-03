import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateNights, calculateTotalPrice, formatNaira, ROOM_TIERS } from './booking';

test('calculateNights calculates correct duration across days', () => {
  assert.equal(calculateNights('2026-11-03', '2026-11-05'), 2);
  assert.equal(calculateNights('2026-11-03', '2026-11-04'), 1);
  assert.equal(calculateNights('2026-11-05', '2026-11-03'), 1); // fallback to 1 if negative
});

test('calculateTotalPrice calculates total room reservation cost', () => {
  const classic = ROOM_TIERS[0]; // 30,000
  assert.equal(calculateTotalPrice(classic.pricePerNight, 3), 90000);

  const suite = ROOM_TIERS[2]; // 40,000
  assert.equal(calculateTotalPrice(suite.pricePerNight, 2), 80000);
});

test('formatNaira formats numbers with currency symbol', () => {
  assert.equal(formatNaira(30000), '₦30,000');
  assert.equal(formatNaira(45000), '₦45,000');
});
