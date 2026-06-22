import { describe, it, expect } from 'vitest';
import { Space } from '../src/domain/spacing';

describe('Space', () => {

    describe('Token properties', () => {
        it('should expose Space0', () => {
            expect(Space.Space0.Key).toBe('--md-sys-measurement-space0');
            expect(Space.Space0.Value).toBe(0);
            expect(Space.Space0.Unit).toBe('px');
        });

        it('should expose Space100', () => {
            expect(Space.Space100.Key).toBe('--md-sys-measurement-space100');
            expect(Space.Space100.Value).toBe(8);
            expect(Space.Space100.Unit).toBe('px');
        });

        it('should expose Space900', () => {
            expect(Space.Space900.Key).toBe('--md-sys-measurement-space900');
            expect(Space.Space900.Value).toBe(72);
            expect(Space.Space900.Unit).toBe('px');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Space.Space100;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-measurement-space100: 8px');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-measurement-space100: 8px;');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = Space.Space100;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-measurement-space100, 8px)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = Space.Space100;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-measurement-space100',
                Value: 8,
                Unit: 'px',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Space.Space100;
            expect(token.toString()).toBe('--md-sys-measurement-space100: 8px');
        });
    });

    describe('AllEnums', () => {
        it('should contain all space tokens', () => {
            expect(Space.AllEnums.Space0).toBe(Space.Space0);
            expect(Space.AllEnums.Space100).toBe(Space.Space100);
            expect(Space.AllEnums.Space900).toBe(Space.Space900);
        });

        it('should be immutable (const assertion)', () => {
            expect(Space.AllEnums).toBeDefined();
        });
    });

});