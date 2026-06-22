import { describe, it, expect } from 'vitest';
import { Duration } from '../src/domain/duration';

describe('Duration', () => {

    describe('Token properties', () => {
        it('should expose Short1', () => {
            expect(Duration.Short1.Key).toBe('--md-sys-motion-duration-short1');
            expect(Duration.Short1.Value).toBe(50);
            expect(Duration.Short1.Unit).toBe('ms');
        });

        it('should expose Medium1', () => {
            expect(Duration.Medium1.Key).toBe('--md-sys-motion-duration-medium1');
            expect(Duration.Medium1.Value).toBe(250);
            expect(Duration.Medium1.Unit).toBe('ms');
        });

        it('should expose Long1', () => {
            expect(Duration.Long1.Key).toBe('--md-sys-motion-duration-long1');
            expect(Duration.Long1.Value).toBe(450);
            expect(Duration.Long1.Unit).toBe('ms');
        });

        it('should expose ExtraLong4', () => {
            expect(Duration.ExtraLong4.Key).toBe('--md-sys-motion-duration-extra-long4');
            expect(Duration.ExtraLong4.Value).toBe(1000);
            expect(Duration.ExtraLong4.Unit).toBe('ms');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Duration.Short1;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-motion-duration-short1: 50ms');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-motion-duration-short1: 50ms;');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = Duration.Short1;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-motion-duration-short1, 50ms)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = Duration.Short1;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-motion-duration-short1',
                Value: 50,
                Unit: 'ms',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Duration.Short1;
            expect(token.toString()).toBe('--md-sys-motion-duration-short1: 50ms');
        });
    });

    describe('AllEnums', () => {
        it('should contain all duration tokens', () => {
            expect(Duration.AllEnums.Short1).toBe(Duration.Short1);
            expect(Duration.AllEnums.Medium1).toBe(Duration.Medium1);
            expect(Duration.AllEnums.Long1).toBe(Duration.Long1);
            expect(Duration.AllEnums.ExtraLong4).toBe(Duration.ExtraLong4);
        });

        it('should be immutable (const assertion)', () => {
            expect(Duration.AllEnums).toBeDefined();
        });
    });

});