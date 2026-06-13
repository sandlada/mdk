import { describe, it, expect } from 'vitest';
import { Color } from '../src/domain/color';
import { Duration } from '../src/domain/duration';
import { Easing } from '../src/domain/easing';
import { ElevationLevel } from '../src/domain/elevation';
import { Shape } from '../src/domain/shape';
import { Palette } from '../src/domain/palette';
import { State } from '../src/domain/state';
import { MeasurementSpace } from '../src/domain/spacing';
import { Typeface } from '../src/domain/typeface';
import { Typescale } from '../src/domain/typescale';

describe('ICSSDeclaration.toCSSDeclaration', () => {

    describe('Color', () => {
        const token = Color.Primary;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-color-primary: light-dark(#006d38, #76f29e)');
        });

        it('should output declaration with semicolon', () => {
            expect(token.toCSSDeclaration({ semicolon: true })).toBe('--md-sys-color-primary: light-dark(#006d38, #76f29e);');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-color-primary, light-dark(#006d38, #76f29e))');
        });

        it('should output wrapped var() ignoring semicolon', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true, semicolon: true })).toBe('var(--md-sys-color-primary, light-dark(#006d38, #76f29e))');
        });
    });

    describe('Duration', () => {
        const token = Duration.Short1;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-motion-duration-short1: 50ms');
        });

        it('should output wrapped var() with unit when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-motion-duration-short1, 50ms)');
        });
    });

    describe('Easing', () => {
        const token = Easing.Standard;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1)');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1))');
        });
    });

    describe('ElevationLevel', () => {
        const token = ElevationLevel.Level1;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-elevation-level-1: 1px');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-elevation-level-1, 1px)');
        });
    });

    describe('Shape', () => {
        const token = Shape.Medium;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-shape-corner-medium: 12px');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-shape-corner-medium, 12px)');
        });
    });

    describe('Palette', () => {
        const token = Palette.Primary40;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-ref-palette-primary-40: #006d38');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-ref-palette-primary-40, #006d38)');
        });
    });

    describe('State', () => {
        const token = State.HoveredStateLayerOpacity;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-state-hovered-state-layer-opacity: 0.08');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-state-hovered-state-layer-opacity, 0.08)');
        });
    });

    describe('MeasurementSpace', () => {
        const token = MeasurementSpace.Space100;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-measurement-space100: 8px');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-measurement-space100, 8px)');
        });
    });

    describe('Typeface', () => {
        const token = Typeface.FontBrand;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-ref-typeface-font-brand: Roboto');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-ref-typeface-font-brand, Roboto)');
        });
    });

    describe('FontCSSDeclaration (via Typescale)', () => {
        const token = Typescale.DisplayLarge.FontSize;

        it('should output declaration by default', () => {
            expect(token.toCSSDeclaration()).toBe('--md-sys-typescale-display-large-font-size: 57px');
        });

        it('should output wrapped var() when wrapVariable is true', () => {
            expect(token.toCSSDeclaration({ wrapVariable: true })).toBe('var(--md-sys-typescale-display-large-font-size, 57px)');
        });
    });

});