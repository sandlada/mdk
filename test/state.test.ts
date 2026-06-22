import { describe, it, expect } from 'vitest';
import { State } from '../src/domain/state';

describe('State', () => {

    describe('Token properties', () => {
        it('should expose HoveredStateLayerOpacity', () => {
            expect(State.HoveredStateLayerOpacity.Key).toBe('--md-sys-state-hovered-state-layer-opacity');
            expect(State.HoveredStateLayerOpacity.Value).toBe(0.08);
            expect(State.HoveredStateLayerOpacity.Unit).toBe('');
        });

        it('should expose PressedStateLayerOpacity', () => {
            expect(State.PressedStateLayerOpacity.Key).toBe('--md-sys-state-pressed-state-layer-opacity');
            expect(State.PressedStateLayerOpacity.Value).toBe(0.10);
            expect(State.PressedStateLayerOpacity.Unit).toBe('');
        });

        it('should expose DisabledStateLayerOpacity', () => {
            expect(State.DisabledStateLayerOpacity.Key).toBe('--md-sys-state-disabled-state-layer-opacity');
            expect(State.DisabledStateLayerOpacity.Value).toBe(0.38);
            expect(State.DisabledStateLayerOpacity.Unit).toBe('');
        });
    });

    describe('FocusIndicator', () => {
        it('should expose Thickness', () => {
            expect(State.FocusIndicator.Thickness.Key).toBe('--md-sys-state-focus-indicator-thickness');
            expect(State.FocusIndicator.Thickness.Value).toBe(3);
            expect(State.FocusIndicator.Thickness.Unit).toBe('px');
        });

        it('should expose OuterOffset', () => {
            expect(State.FocusIndicator.OuterOffset.Key).toBe('--md-sys-state-focus-indicator-outer-offset');
            expect(State.FocusIndicator.OuterOffset.Value).toBe(2);
            expect(State.FocusIndicator.OuterOffset.Unit).toBe('px');
        });
    });

    describe('ToCSSDeclaration()', () => {
        const token = State.HoveredStateLayerOpacity;

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-state-hovered-state-layer-opacity: 0.08');
        });

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-state-hovered-state-layer-opacity: 0.08;');
        });
    });

    describe('ToCSSVariable()', () => {
        const token = State.HoveredStateLayerOpacity;

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-state-hovered-state-layer-opacity, 0.08)');
        });
    });

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = State.HoveredStateLayerOpacity;
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-state-hovered-state-layer-opacity',
                Value: 0.08,
                Unit: '',
            });
        });
    });

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = State.HoveredStateLayerOpacity;
            expect(token.toString()).toBe('--md-sys-state-hovered-state-layer-opacity: 0.08');
        });
    });

    describe('AllEnums', () => {
        it('should contain all state tokens', () => {
            expect(State.AllEnums.HoveredStateLayerOpacity).toBe(State.HoveredStateLayerOpacity);
            expect(State.AllEnums.PressedStateLayerOpacity).toBe(State.PressedStateLayerOpacity);
            expect(State.AllEnums.DisabledStateLayerOpacity).toBe(State.DisabledStateLayerOpacity);
        });

        it('should contain FocusIndicator', () => {
            expect(State.AllEnums.FocusIndicator.Thickness).toBe(State.FocusIndicator.Thickness);
            expect(State.AllEnums.FocusIndicator.OuterOffset).toBe(State.FocusIndicator.OuterOffset);
        });

        it('should be immutable (const assertion)', () => {
            expect(State.AllEnums).toBeDefined();
        });
    });

});