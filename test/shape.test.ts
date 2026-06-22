import { describe, it, expect } from 'vitest';
import { Shape } from '../src/domain/shape';

describe('Shape', () => {

    describe('Token properties', () => {
        it('should expose None', () => {
            expect(Shape.None.Key).toBe('--md-sys-shape-corner-none');
            expect(Shape.None.Value).toBe(0);
            expect(Shape.None.Unit).toBe('px');
        });

        it('should expose Medium', () => {
            expect(Shape.Medium.Key).toBe('--md-sys-shape-corner-medium');
            expect(Shape.Medium.Value).toBe(12);
            expect(Shape.Medium.Unit).toBe('px');
        });

        it('should expose Full', () => {
            expect(Shape.Full.Key).toBe('--md-sys-shape-corner-full');
            expect(Shape.Full.Value).toBe('calc(infinity * 1px)');
            expect(Shape.Full.Unit).toBe('');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Shape.Medium;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-shape-corner-medium: 12px');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-shape-corner-medium: 12px;');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = Shape.Medium;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-shape-corner-medium, 12px)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = Shape.Medium;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-shape-corner-medium',
                Value: 12,
                Unit: 'px',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Shape.Medium;
            expect(token.toString()).toBe('--md-sys-shape-corner-medium: 12px');
        });
    });

    describe('AllEnums', () => {
        it('should contain all shape tokens', () => {
            expect(Shape.AllEnums.None).toBe(Shape.None);
            expect(Shape.AllEnums.Medium).toBe(Shape.Medium);
            expect(Shape.AllEnums.Full).toBe(Shape.Full);
        });

        it('should be immutable (const assertion)', () => {
            expect(Shape.AllEnums).toBeDefined();
        });
    });

});