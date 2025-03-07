import { sum } from './index.js';
import {describe, test, it} from 'node:test';
import assert from 'node:assert';


describe ('Penjumlahan', () => {
      it('Penjumlahan antar bilangan positif', () => {
        const result = sum(2, 3);
        assert.strictEqual(result, 5);
      });
      
      
      it('Penjumlahan bilangan positif - negatif', () => {
        const result = sum(5, -3);
        assert.strictEqual(result, 2);
      });
      
      
      it('Penjumlahan antar bilangan negatif', () => {
        const result = sum(-4, -6);
        assert.strictEqual(result, -10);
      });
      
      
      it('Penjumlahan angka nol', () => {
        const result = sum(0, 7);
        assert.strictEqual(result, 7);
      });
      
      it('Penjumlahan bilangan desimal', () => {
        const result = sum(1.5, 2.5);
        assert.strictEqual(result, 4);
      });
      
      


});


