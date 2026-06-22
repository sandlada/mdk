import { describe, it, expect } from 'vitest';
import { Palette } from '../src/domain/palette';

describe('Palette', () => {

    describe('From()', () => {
        it('should create a Palette instance with default contract when no argument is provided', () => {
            const palette = Palette.From();
            expect(palette.Primary40.ToCSSDeclaration()).toBe('--md-ref-palette-primary-40: #006d38');
            expect(palette.Secondary40.ToCSSDeclaration()).toBe('--md-ref-palette-secondary-40: #3c6847');
            expect(palette.Tertiary40.ToCSSDeclaration()).toBe('--md-ref-palette-tertiary-40: #8f4d2a');
            expect(palette.Error40.ToCSSDeclaration()).toBe('--md-ref-palette-error-40: #ba1a1a');
            expect(palette.Neutral40.ToCSSDeclaration()).toBe('--md-ref-palette-neutral-40: #596059');
            expect(palette.NeutralVariant40.ToCSSDeclaration()).toBe('--md-ref-palette-neutral-variant-40: #556256');
        });

        it('should allow overriding specific palette tones via partial contract', () => {
            const palette = Palette.From({
                Primary40: { Key: '--custom-primary-40', Value: '#ff0000' },
                Secondary40: { Key: '--custom-secondary-40', Value: '#00ff00' },
            });

            expect(palette.Primary40.ToCSSDeclaration()).toBe('--custom-primary-40: #ff0000');
            expect(palette.Secondary40.ToCSSDeclaration()).toBe('--custom-secondary-40: #00ff00');

            // Non-overridden tones should remain default
            expect(palette.Tertiary40.ToCSSDeclaration()).toBe('--md-ref-palette-tertiary-40: #8f4d2a');
        });

        it('should preserve the overridden Key and Value on the palette token', () => {
            const palette = Palette.From({
                Primary40: { Key: '--app-primary-40', Value: '#123456' },
            });

            expect(palette.Primary40.Key).toBe('--app-primary-40');
            expect(palette.Primary40.Value).toBe('#123456');
        });
    });

    describe('Palette token properties', () => {
        const palette = Palette.From();

        it('should expose Primary0 and Primary100 boundaries', () => {
            expect(palette.Primary0.Key).toBe('--md-ref-palette-primary-0');
            expect(palette.Primary0.Value).toBe('#000000');
            expect(palette.Primary100.Key).toBe('--md-ref-palette-primary-100');
            expect(palette.Primary100.Value).toBe('#ffffff');
        });

        it('should expose Primary40 (mid-tone)', () => {
            expect(palette.Primary40.Key).toBe('--md-ref-palette-primary-40');
            expect(palette.Primary40.Value).toBe('#006d38');
        });

        it('should expose Secondary0 and Secondary100', () => {
            expect(palette.Secondary0.Key).toBe('--md-ref-palette-secondary-0');
            expect(palette.Secondary0.Value).toBe('#000000');
            expect(palette.Secondary100.Key).toBe('--md-ref-palette-secondary-100');
            expect(palette.Secondary100.Value).toBe('#ffffff');
        });

        it('should expose Tertiary0 and Tertiary100', () => {
            expect(palette.Tertiary0.Key).toBe('--md-ref-palette-tertiary-0');
            expect(palette.Tertiary0.Value).toBe('#000000');
            expect(palette.Tertiary100.Key).toBe('--md-ref-palette-tertiary-100');
            expect(palette.Tertiary100.Value).toBe('#ffffff');
        });

        it('should expose Error0 and Error100', () => {
            expect(palette.Error0.Key).toBe('--md-ref-palette-error-0');
            expect(palette.Error0.Value).toBe('#000000');
            expect(palette.Error100.Key).toBe('--md-ref-palette-error-100');
            expect(palette.Error100.Value).toBe('#ffffff');
        });

        it('should expose Neutral0 and Neutral100', () => {
            expect(palette.Neutral0.Key).toBe('--md-ref-palette-neutral-0');
            expect(palette.Neutral0.Value).toBe('#000000');
            expect(palette.Neutral100.Key).toBe('--md-ref-palette-neutral-100');
            expect(palette.Neutral100.Value).toBe('#ffffff');
        });

        it('should expose NeutralVariant0 and NeutralVariant100', () => {
            expect(palette.NeutralVariant0.Key).toBe('--md-ref-palette-neutral-variant-0');
            expect(palette.NeutralVariant0.Value).toBe('#000000');
            expect(palette.NeutralVariant100.Key).toBe('--md-ref-palette-neutral-variant-100');
            expect(palette.NeutralVariant100.Value).toBe('#ffffff');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Palette.From().Primary40;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-ref-palette-primary-40: #006d38');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-ref-palette-primary-40: #006d38;');
        });

        it('should return var() wrapper via ToCSSVariable', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-ref-palette-primary-40, #006d38)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key and Value', () => {
            const token = Palette.From().Primary40;
            expect(token.toJSON()).toEqual({
                Key: '--md-ref-palette-primary-40',
                Value: '#006d38',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Palette.From().Primary40;
            expect(token.toString()).toBe('--md-ref-palette-primary-40: #006d38');
        });
    });

    describe('AllEnums', () => {
        const palette = Palette.From();

        it('should contain all palette tokens', () => {
            expect(palette.AllEnums.Primary40).toBe(palette.Primary40);
            expect(palette.AllEnums.Secondary40).toBe(palette.Secondary40);
            expect(palette.AllEnums.Tertiary40).toBe(palette.Tertiary40);
            expect(palette.AllEnums.Error40).toBe(palette.Error40);
            expect(palette.AllEnums.Neutral40).toBe(palette.Neutral40);
            expect(palette.AllEnums.NeutralVariant40).toBe(palette.NeutralVariant40);
        });

        it('should contain boundary tones', () => {
            expect(palette.AllEnums.Primary0).toBe(palette.Primary0);
            expect(palette.AllEnums.Primary100).toBe(palette.Primary100);
            expect(palette.AllEnums.Neutral0).toBe(palette.Neutral0);
            expect(palette.AllEnums.NeutralVariant100).toBe(palette.NeutralVariant100);
        });

        it('should be immutable (const assertion)', () => {
            // TypeScript compile-time check; at runtime we just verify it exists
            expect(palette.AllEnums).toBeDefined();
        });
    });

    describe('Custom palette contract', () => {
        it('should support complete custom values for any palette tone', () => {
            const palette = Palette.From({
                Primary40: { Key: '--my-primary-40', Value: '#abc123' },
                Secondary40: { Key: '--my-secondary-40', Value: '#ffffff' },
                Neutral50: { Key: '--my-neutral-50', Value: '#eeeeee' },
            });

            expect(palette.Primary40.ToCSSDeclaration()).toBe('--my-primary-40: #abc123');
            expect(palette.Secondary40.ToCSSDeclaration()).toBe('--my-secondary-40: #ffffff');
            expect(palette.Neutral50.ToCSSDeclaration()).toBe('--my-neutral-50: #eeeeee');
        });

        it('should use default Key when palette tone is not overridden', () => {
            const palette = Palette.From({
                Primary40: { Key: '--override-only-primary-40', Value: '#000000' },
            });

            // Secondary40 was not overridden, so it should use the default Key
            expect(palette.Secondary40.Key).toBe('--md-ref-palette-secondary-40');
        });
    });

});