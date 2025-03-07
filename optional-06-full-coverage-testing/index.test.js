import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; 


test('Penjumlahan dua bilangan positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5); 
});


test('Penjumlahan jika salah satu parameter bukan angka', () => {
  const result1 = sum('2', 3);
  assert.strictEqual(result1, 0); 
  const result2 = sum(2, '3'); 
  assert.strictEqual(result2, 0);
});


test('Penjumlahan jika salah satu parameter negatif', () => {
  const result1 = sum(-2, 3); 
  assert.strictEqual(result1, 0); 

  const result2 = sum(2, -3); 
  assert.strictEqual(result2, 0); 
});


test('Penjumlahan jika kedua parameter negatif', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, 0);
});


test('Penjumlahan jika kedua parameter adalah nol', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0); 
});


test('Penjumlahan jika salah satu parameter adalah nol', () => {
  const result1 = sum(0, 5); 
  assert.strictEqual(result1, 5); 

  const result2 = sum(5, 0); 
  assert.strictEqual(result2, 5); 
});