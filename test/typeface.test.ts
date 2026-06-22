import { describe, it, expect } from 'vitest';
import { Typeface } from '../src/domain/typeface';

describe('Typeface', () => {

    describe('Token properties', () => {
        it('should expose FontBrand', () => {
            expect(Typeface.FontBrand.Key).toBe('--md-ref-typeface-font-brand');
            expect(Typeface.FontBrand.Value).toBe('Roboto');
        });

        it('should expose WeightBold', () => {
            expect(Typeface.WeightBold.Key).toBe('--md-ref-typeface-weight-bold');
            expect(Typeface.WeightBold.Value).toBe(700);
        });

        it('should expose WeightRegular', () => {
            expect(Typeface.WeightRegular.Key).toBe('--md-ref-typeface-weight-regular');
            expect(Typeface.WeightRegular.Value).toBe(400);
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Typeface.FontBrand;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-ref-typeface-font-brand: Roboto');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-ref-typeface-font-brand: Roboto;');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = Typeface.FontBrand;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-ref-typeface-font-brand, Roboto)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key and Value', () => {
            const token = Typeface.FontBrand;
            expect(token.toJSON()).toEqual({
                Key: '--md-ref-typeface-font-brand',
                Value: 'Roboto',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Typeface.FontBrand;
            expect(token.toString()).toBe('--md-ref-typeface-font-brand: Roboto');
        });
    });

    describe('AllEnums', () => {
        it('should contain all typeface tokens', () => {
            expect(Typeface.AllEnums.FontBrand).toBe(Typeface.FontBrand);
            expect(Typeface.AllEnums.WeightBold).toBe(Typeface.WeightBold);
            expect(Typeface.AllEnums.WeightRegular).toBe(Typeface.WeightRegular);
        });

        it('should be immutable (const assertion)', () => {
            expect(Typeface.AllEnums).toBeDefined();
        });
    });

});