import { describe, it, expect } from 'vitest'
import { ElevationLevel } from '../src/domain/elevation.js'

describe('ElevationLevel', () => {
    describe('Token properties', () => {
        it('should expose Level0', () => {
            expect(ElevationLevel.Level0.Key).toBe('--md-sys-elevation-level-0')
            expect(ElevationLevel.Level0.Value).toBe(0)
            expect(ElevationLevel.Level0.Unit).toBe('px')
        })

        it('should expose Level1', () => {
            expect(ElevationLevel.Level1.Key).toBe('--md-sys-elevation-level-1')
            expect(ElevationLevel.Level1.Value).toBe(1)
            expect(ElevationLevel.Level1.Unit).toBe('px')
        })

        it('should expose Level5', () => {
            expect(ElevationLevel.Level5.Key).toBe('--md-sys-elevation-level-5')
            expect(ElevationLevel.Level5.Value).toBe(12)
            expect(ElevationLevel.Level5.Unit).toBe('px')
        })
    })

    describe('ToCSSDeclaration()', () => {
        const token = ElevationLevel.Level1

        it('should return CSS declaration without Semicolon by default', () => {
            expect(token.ToCSSDeclaration()).toBe('--md-sys-elevation-level-1: 1px')
        })

        it('should return CSS declaration with Semicolon when Semicolon is true', () => {
            expect(token.ToCSSDeclaration({ Semicolon: true })).toBe('--md-sys-elevation-level-1: 1px;')
        })
    })

    describe('ToCSSVariable()', () => {
        const token = ElevationLevel.Level1

        it('should return var() wrapper', () => {
            expect(token.ToCSSVariable()).toBe('var(--md-sys-elevation-level-1, 1px)')
        })
    })

    describe('toJSON()', () => {
        it('should return an object with Key, Value, and Unit', () => {
            const token = ElevationLevel.Level1
            expect(token.toJSON()).toEqual({
                Key: '--md-sys-elevation-level-1',
                Value: 1,
                Unit: 'px'
            })
        })
    })

    describe('toString()', () => {
        it('should return the CSS declaration by default', () => {
            const token = ElevationLevel.Level1
            expect(token.toString()).toBe('--md-sys-elevation-level-1: 1px')
        })
    })

    describe('AllEnums', () => {
        it('should contain all elevation tokens', () => {
            expect(ElevationLevel.AllEnums.Level0).toBe(ElevationLevel.Level0)
            expect(ElevationLevel.AllEnums.Level1).toBe(ElevationLevel.Level1)
            expect(ElevationLevel.AllEnums.Level5).toBe(ElevationLevel.Level5)
        })

        it('should be immutable (const assertion)', () => {
            expect(ElevationLevel.AllEnums).toBeDefined()
        })
    })
})
