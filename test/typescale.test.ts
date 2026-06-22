import { describe, it, expect } from 'vitest';
import { Typescale } from '../src/domain/typescale';
import { Typeface } from '../src/domain/typeface';

describe('Typescale', () => {

    describe('DisplayLarge', () => {
        const token = Typescale.DisplayLarge;

        it('should have Font', () => {
            expect(token.Font).toBe(Typeface.FontBrand);
        });

        it('should have FontSize', () => {
            expect(token.FontSize.Key).toBe('--md-sys-typescale-display-large-font-size');
            expect(token.FontSize.Value).toBe(57);
            expect(token.FontSize.Unit).toBe('px');
        });

        it('should have Tracking', () => {
            expect(token.Tracking.Key).toBe('--md-sys-typescale-display-large-font-tracking');
            expect(token.Tracking.Value).toBe(0);
            expect(token.Tracking.Unit).toBe('px');
        });

        it('should have LineHeight', () => {
            expect(token.LineHeight.Key).toBe('--md-sys-typescale-display-large-font-line-height');
            expect(token.LineHeight.Value).toBe(64);
            expect(token.LineHeight.Unit).toBe('px');
        });

        it('should have FontWeight', () => {
            expect(token.FontWeight).toBe(Typeface.WeightRegular);
        });
    });

    describe('TitleMedium', () => {
        const token = Typescale.TitleMedium;

        it('should have Font', () => {
            expect(token.Font).toBe(Typeface.FontPlain);
        });

        it('should have FontWeight', () => {
            expect(token.FontWeight).toBe(Typeface.WeightMedium);
        });
    });

    describe('FontCSSDeclaration.ToCSSDeclaration()', () => {
        const token = Typescale.DisplayLarge.FontSize;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-typescale-display-large-font-size: 57px');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-typescale-display-large-font-size: 57px;');
        });
    });

    describe('FontCSSDeclaration.ToCSSVariable()', () => {
        const token = Typescale.DisplayLarge.FontSize;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-typescale-display-large-font-size, 57px)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = Typescale.DisplayLarge.FontSize;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-typescale-display-large-font-size',
                Value: 57,
                Unit: 'px',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Typescale.DisplayLarge.FontSize;
            expect(token.toString()).toBe('--md-sys-typescale-display-large-font-size: 57px');
        });
    });

    describe('AllEnums', () => {
        it('should contain all typescale tokens', () => {
            expect(Typescale.AllEnums.DisplayLarge).toBe(Typescale.DisplayLarge);
            expect(Typescale.AllEnums.TitleMedium).toBe(Typescale.TitleMedium);
            expect(Typescale.AllEnums.BodySmall).toBe(Typescale.BodySmall);
            expect(Typescale.AllEnums.EmphasizedDisplayLarge).toBe(Typescale.EmphasizedDisplayLarge);
        });

        it('should be immutable (const assertion)', () => {
            expect(Typescale.AllEnums).toBeDefined();
        });
    });

});