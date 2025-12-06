import { describe, it, expect } from 'vitest';
import { Typescale } from '../src/domain/typescale'; 
import jsons from './typography.json'

const Variants: Array<[keyof typeof Typescale, string]> = [
    ['DisplayLarge', 'display-large'],
    ['DisplayMedium', 'display-medium'],
    ['DisplaySmall', 'display-small'],
    ['HeadlineLarge', 'headline-large'],
    ['HeadlineMedium', 'headline-medium'],
    ['HeadlineSmall', 'headline-small'],
    ['TitleLarge', 'title-large'],
    ['TitleMedium', 'title-medium'],
    ['TitleSmall', 'title-small'],
    ['BodyLarge', 'body-large'],
    ['BodyMedium', 'body-medium'],
    ['BodySmall', 'body-small'],
    ['LabelLarge', 'label-large'],
    ['LabelMedium', 'label-medium'],
    ['LabelSmall', 'label-small'],
    ['EmphasizedDisplayLarge', 'emphasized-display-large'],
    ['EmphasizedDisplayMedium', 'emphasized-display-medium'],
    ['EmphasizedDisplaySmall', 'emphasized-display-small'],
    ['EmphasizedHeadlineLarge', 'emphasized-headline-large'],
    ['EmphasizedHeadlineMedium', 'emphasized-headline-medium'],
    ['EmphasizedHeadlineSmall', 'emphasized-headline-small'],
    ['EmphasizedTitleLarge', 'emphasized-title-large'],
    ['EmphasizedTitleMedium', 'emphasized-title-medium'],
    ['EmphasizedTitleSmall', 'emphasized-title-small'],
    ['EmphasizedBodyLarge', 'emphasized-body-large'],
    ['EmphasizedBodyMedium', 'emphasized-body-medium'],
    ['EmphasizedBodySmall', 'emphasized-body-small'],
    ['EmphasizedLabelLarge', 'emphasized-label-large'],
    ['EmphasizedLabelMedium', 'emphasized-label-medium'],
    ['EmphasizedLabelSmall', 'emphasized-label-small'],
]

describe('MDK Typography System', () => {

    it('should be an instance of Typescale', () => {
        expect(Typescale.HeadlineLarge).toBeInstanceOf(Typescale);
        expect(Typescale.BodyMedium).toBeInstanceOf(Typescale);
    });

    it('should have correct values', () => {
        for(const [key, jsonKey] of Variants) {
            const token = Typescale[key]
            // @ts-ignore
            const size = jsons[`${jsonKey}-size`]
            // @ts-ignore
            const tracking = jsons[`${jsonKey}-tracking`]
            // @ts-ignore
            const lineHeight = jsons[`${jsonKey}-line-height`]
            // @ts-ignore
            const font = jsons[`${jsonKey}-font`]
            // @ts-ignore
            const weight = jsons[`${jsonKey}-weight`]

            if(!jsonKey.startsWith('emphasized')) {
                expect(token.font.toCSSValue()).toBe(font)
                expect(token.fontSize.toCSSValueWithoutVariable()).toBe(size)
                expect(token.lineHeight.toCSSValueWithoutVariable()).toBe(lineHeight)
                expect(token.tracking.toCSSValueWithoutVariable()).toBe(tracking)
                expect(token.fontWeight.toCSSValue()).toBe(weight)
            }
        }
    });

    it('should correctly format CSS strings', () => {
        const token = Typescale.TitleMedium;
        expect(token.tracking.value).toBe(0.15);
    });

});