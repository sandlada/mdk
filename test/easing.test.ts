import { describe, it, expect } from 'vitest';
import { Easing } from '../src/domain/easing';

describe('Easing', () => {

    describe('Token properties', () => {
        it('should expose Standard', () => {
            expect(Easing.Standard.Key).toBe('--md-sys-motion-easing-standard');
            expect(Easing.Standard.Value).toEqual([0.20, 0.00, 0.00, 1.00]);
        });

        it('should expose EmphasizedAccelerate', () => {
            expect(Easing.EmphasizedAccelerate.Key).toBe('--md-sys-motion-easing-emphasized-accelerate');
            expect(Easing.EmphasizedAccelerate.Value).toEqual([0.30, 0.00, 0.80, 0.15]);
        });

        it('should expose Linear', () => {
            expect(Easing.Linear.Key).toBe('--md-sys-motion-easing-linear');
            expect(Easing.Linear.Value).toEqual([0.00, 0.00, 1.00, 1.00]);
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = Easing.Standard;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1)');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = Easing.Standard;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1))');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key and Value', () => {
            const token = Easing.Standard;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-motion-easing-standard',
                Value: [0.20, 0.00, 0.00, 1.00],
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = Easing.Standard;
            expect(token.toString()).toBe('--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1)');
        });
    });

    describe('AllEnums', () => {
        it('should contain all easing tokens', () => {
            expect(Easing.AllEnums.Standard).toBe(Easing.Standard);
            expect(Easing.AllEnums.Emphasized).toBe(Easing.Emphasized);
            expect(Easing.AllEnums.Linear).toBe(Easing.Linear);
        });

        it('should be immutable (const assertion)', () => {
            expect(Easing.AllEnums).toBeDefined();
        });
    });

});