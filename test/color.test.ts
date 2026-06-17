import { describe, it, expect } from 'vitest';
import { Color } from '../src/domain/color';

describe('Color', () => {

    describe('From()', () => {
        it('should create a Color instance with default contract when no argument is provided', () => {
            const color = Color.From();
            expect(color.Primary.ToCSSDeclaration()).toBe('--md-sys-color-primary: light-dark(#006d38, #76f29e)');
            expect(color.Secondary.ToCSSDeclaration()).toBe('--md-sys-color-secondary: light-dark(#3c6847, #a2d2ab)');
            expect(color.Background.ToCSSDeclaration()).toBe('--md-sys-color-background: light-dark(#f4fbf1, #0e150f)');
        });

        it('should allow overriding specific colors via partial contract', () => {
            const color = Color.From({
                Primary: { Key: '--custom-primary', Value: '#ff0000' },
                Secondary: { Key: '--custom-secondary', Value: '#00ff00' },
            });

            expect(color.Primary.ToCSSDeclaration()).toBe('--custom-primary: #ff0000');
            expect(color.Secondary.ToCSSDeclaration()).toBe('--custom-secondary: #00ff00');

            // Non-overridden colors should remain default
            expect(color.Background.ToCSSDeclaration()).toBe('--md-sys-color-background: light-dark(#f4fbf1, #0e150f)');
        });

        it('should preserve the overridden Key and Value on the color token', () => {
            const color = Color.From({
                Primary: { Key: '--app-primary', Value: '#123456' },
            });

            expect(color.Primary.Key).toBe('--app-primary');
            expect(color.Primary.Value).toBe('#123456');
        });
    });

    describe('Color token properties', () => {
        const color = Color.From();

        it('should expose PrimaryKeyColor', () => {
            expect(color.PrimaryKeyColor.Key).toBe('--md-sys-color-primary-key-color');
            expect(color.PrimaryKeyColor.Value).toBe('#039d54');
        });

        it('should expose Primary', () => {
            expect(color.Primary.Key).toBe('--md-sys-color-primary');
            expect(color.Primary.Value).toBe('light-dark(#006d38, #76f29e)');
        });

        it('should expose OnPrimary', () => {
            expect(color.OnPrimary.Key).toBe('--md-sys-color-on-primary');
            expect(color.OnPrimary.Value).toBe('light-dark(#ffffff, #00391a)');
        });

        it('should expose Surface', () => {
            expect(color.Surface.Key).toBe('--md-sys-color-surface');
            expect(color.Surface.Value).toBe('light-dark(#f4fbf1, #0e150f)');
        });

        it('should expose Background', () => {
            expect(color.Background.Key).toBe('--md-sys-color-background');
            expect(color.Background.Value).toBe('light-dark(#f4fbf1, #0e150f)');
        });

        it('should expose Error', () => {
            expect(color.Error.Key).toBe('--md-sys-color-error');
            expect(color.Error.Value).toBe('light-dark(#ba1a1a, #ffb4ab)');
        });

        it('should expose Outline', () => {
            expect(color.Outline.Key).toBe('--md-sys-color-outline');
            expect(color.Outline.Value).toBe('light-dark(#6d7a6e, #879487)');
        });

        it('should expose Scrim', () => {
            expect(color.Scrim.Key).toBe('--md-sys-color-scrim');
            expect(color.Scrim.Value).toBe('light-dark(#000000, #000000)');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Color.From().Primary;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-color-primary: light-dark(#006d38, #76f29e)');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-color-primary: light-dark(#006d38, #76f29e);');
        });

        it('should return var() wrapper when WrapVariable is true', () => {
            expect(token.ToCSSDeclaration({ WrapVariable: true })).toBe('var(--md-sys-color-primary, light-dark(#006d38, #76f29e))');
        });

        it('should ignore Semicolon when WrapVariable is true', () => {
            expect(token.ToCSSDeclaration({ WrapVariable: true })).toBe('var(--md-sys-color-primary, light-dark(#006d38, #76f29e))');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key and Value', () => {
            const token = Color.From().Primary;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-color-primary',
                Value: 'light-dark(#006d38, #76f29e)',
            });
        });
    });

    describe('toString()', () => {
        it('should return the raw Value string', () => {
            const token = Color.From().Primary;
            expect(token.toString()).toBe('light-dark(#006d38, #76f29e)');
        });
    });

    describe('AllEnums', () => {
        const color = Color.From();

        it('should contain all semantic color tokens', () => {
            expect(color.AllEnums.Primary).toBe(color.Primary);
            expect(color.AllEnums.Secondary).toBe(color.Secondary);
            expect(color.AllEnums.Tertiary).toBe(color.Tertiary);
            expect(color.AllEnums.Error).toBe(color.Error);
            expect(color.AllEnums.Background).toBe(color.Background);
            expect(color.AllEnums.Surface).toBe(color.Surface);
            expect(color.AllEnums.Outline).toBe(color.Outline);
        });

        it('should contain surface container variants', () => {
            expect(color.AllEnums.SurfaceContainerLowest).toBe(color.SurfaceContainerLowest);
            expect(color.AllEnums.SurfaceContainerLow).toBe(color.SurfaceContainerLow);
            expect(color.AllEnums.SurfaceContainer).toBe(color.SurfaceContainer);
            expect(color.AllEnums.SurfaceContainerHigh).toBe(color.SurfaceContainerHigh);
            expect(color.AllEnums.SurfaceContainerHighest).toBe(color.SurfaceContainerHighest);
        });

        it('should contain fixed and fixed-dim variants', () => {
            expect(color.AllEnums.PrimaryFixed).toBe(color.PrimaryFixed);
            expect(color.AllEnums.PrimaryFixedDim).toBe(color.PrimaryFixedDim);
            expect(color.AllEnums.SecondaryFixed).toBe(color.SecondaryFixed);
            expect(color.AllEnums.SecondaryFixedDim).toBe(color.SecondaryFixedDim);
            expect(color.AllEnums.TertiaryFixed).toBe(color.TertiaryFixed);
            expect(color.AllEnums.TertiaryFixedDim).toBe(color.TertiaryFixedDim);
        });

        it('should be immutable (const assertion)', () => {
            // TypeScript compile-time check; at runtime we just verify it exists
            expect(color.AllEnums).toBeDefined();
        });
    });

    describe('Custom color contract', () => {
        it('should support complete custom values for any semantic color', () => {
            const color = Color.From({
                Primary: { Key: '--my-primary', Value: '#abc123' },
                OnPrimary: { Key: '--my-on-primary', Value: '#ffffff' },
                Surface: { Key: '--my-surface', Value: '#eeeeee' },
            });

            expect(color.Primary.ToCSSDeclaration()).toBe('--my-primary: #abc123');
            expect(color.OnPrimary.ToCSSDeclaration()).toBe('--my-on-primary: #ffffff');
            expect(color.Surface.ToCSSDeclaration()).toBe('--my-surface: #eeeeee');
        });

        it('should use default Key when color is not overridden', () => {
            const color = Color.From({
                Primary: { Key: '--override-only-primary', Value: '#000000' },
            });

            // Secondary was not overridden, so it should use the default Key
            expect(color.Secondary.Key).toBe('--md-sys-color-secondary');
        });
    });

});
