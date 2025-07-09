import { Typeface } from './typeface'

export abstract class Typescale {
    public static readonly DisplayLargeFont       = Typeface.Plain
    public static readonly DisplayLargeSize       = `57px`
    public static readonly DisplayLargeTracking   = `-0.25px`
    public static readonly DisplayLargeLineHeight = `64px`
    public static readonly DisplayLargeWeight     = Typeface.WeightRegular

    public static readonly DisplayMediumFont       = Typeface.Plain
    public static readonly DisplayMediumSize       = `45px`
    public static readonly DisplayMediumTracking   = `0px`
    public static readonly DisplayMediumLineHeight = `52px`
    public static readonly DisplayMediumWeight     = Typeface.WeightRegular

    public static readonly DisplaySmallFont       = Typeface.Plain
    public static readonly DisplaySmallSize       = `36px`
    public static readonly DisplaySmallTracking   = `0px`
    public static readonly DisplaySmallLineHeight = `44px`
    public static readonly DisplaySmallWeight     = Typeface.WeightRegular

    public static readonly HeadlineLargeFont       = Typeface.Plain
    public static readonly HeadlineLargeSize       = `32px`
    public static readonly HeadlineLargeTracking   = `0px`
    public static readonly HeadlineLargeLineHeight = `40px`
    public static readonly HeadlineLargeWeight     = Typeface.WeightRegular

    public static readonly HeadlineMediumFont       = Typeface.Plain
    public static readonly HeadlineMediumSize       = `28px`
    public static readonly HeadlineMediumTracking   = `0px`
    public static readonly HeadlineMediumLineHeight = `36px`
    public static readonly HeadlineMediumWeight     = Typeface.WeightRegular

    public static readonly HeadlineSmallFont       = Typeface.Plain
    public static readonly HeadlineSmallSize       = `24px`
    public static readonly HeadlineSmallTracking   = `0px`
    public static readonly HeadlineSmallLineHeight = `32px`
    public static readonly HeadlineSmallWeight     = Typeface.WeightRegular

    public static readonly TitleLargeFont       = Typeface.Plain
    public static readonly TitleLargeSize       = `22px`
    public static readonly TitleLargeTracking   = `0px`
    public static readonly TitleLargeLineHeight = `28px`
    public static readonly TitleLargeWeight     = Typeface.WeightRegular

    public static readonly TitleMediumFont       = Typeface.Plain
    public static readonly TitleMediumSize       = `16px`
    public static readonly TitleMediumTracking   = `0.15px`
    public static readonly TitleMediumLineHeight = `24px`
    public static readonly TitleMediumWeight     = Typeface.WeightMedium

    public static readonly TitleSmallFont       = Typeface.Plain
    public static readonly TitleSmallSize       = `14px`
    public static readonly TitleSmallTracking   = `0.1px`
    public static readonly TitleSmallLineHeight = `20px`
    public static readonly TitleSmallWeight     = Typeface.WeightMedium

    public static readonly BodyLargeFont       = Typeface.Plain
    public static readonly BodyLargeSize       = `16px`
    public static readonly BodyLargeTracking   = `0.5px`
    public static readonly BodyLargeLineHeight = `24px`
    public static readonly BodyLargeWeight     = Typeface.WeightRegular

    public static readonly BodyMediumFont       = Typeface.Plain
    public static readonly BodyMediumSize       = `14px`
    public static readonly BodyMediumTracking   = `0.25px`
    public static readonly BodyMediumLineHeight = `20px`
    public static readonly BodyMediumWeight     = Typeface.WeightRegular

    public static readonly BodySmallFont       = Typeface.Plain
    public static readonly BodySmallSize       = `12px`
    public static readonly BodySmallTracking   = `0.4px`
    public static readonly BodySmallLineHeight = `16px`
    public static readonly BodySmallWeight     = Typeface.WeightRegular

    public static readonly LabelLargeFont       = Typeface.Plain
    public static readonly LabelLargeSize       = `14px`
    public static readonly LabelLargeTracking   = `0.1px`
    public static readonly LabelLargeLineHeight = `20px`
    public static readonly LabelLargeWeight     = Typeface.WeightMedium

    public static readonly LabelMediumFont       = Typeface.Plain
    public static readonly LabelMediumSize       = `12px`
    public static readonly LabelMediumTracking   = `0.5px`
    public static readonly LabelMediumLineHeight = `16px`
    public static readonly LabelMediumWeight     = Typeface.WeightMedium

    public static readonly LabelSmallFont       = Typeface.Plain
    public static readonly LabelSmallSize       = `11px`
    public static readonly LabelSmallTracking   = `0.5px`
    public static readonly LabelSmallLineHeight = `16px`
    public static readonly LabelSmallWeight     = Typeface.WeightMedium

    public static readonly EmphasizedDisplayLargeFont       = Typeface.Plain
    public static readonly EmphasizedDisplayLargeSize       = `57px`
    public static readonly EmphasizedDisplayLargeTracking   = `-0.25px`
    public static readonly EmphasizedDisplayLargeLineHeight = `64px`
    public static readonly EmphasizedDisplayLargeWeight     = Typeface.WeightMedium

    public static readonly EmphasizedDisplayMediumFont       = Typeface.Plain
    public static readonly EmphasizedDisplayMediumSize       = `45px`
    public static readonly EmphasizedDisplayMediumTracking   = `0px`
    public static readonly EmphasizedDisplayMediumLineHeight = `52px`
    public static readonly EmphasizedDisplayMediumWeight     = Typeface.WeightMedium

    public static readonly EmphasizedDisplaySmallFont       = Typeface.Plain
    public static readonly EmphasizedDisplaySmallSize       = `36px`
    public static readonly EmphasizedDisplaySmallTracking   = `0px`
    public static readonly EmphasizedDisplaySmallLineHeight = `44px`
    public static readonly EmphasizedDisplaySmallWeight     = Typeface.WeightMedium

    public static readonly EmphasizedHeadlineLargeFont       = Typeface.Plain
    public static readonly EmphasizedHeadlineLargeSize       = `32px`
    public static readonly EmphasizedHeadlineLargeTracking   = `0px`
    public static readonly EmphasizedHeadlineLargeLineHeight = `40px`
    public static readonly EmphasizedHeadlineLargeWeight     = Typeface.WeightMedium

    public static readonly EmphasizedHeadlineMediumFont       = Typeface.Plain
    public static readonly EmphasizedHeadlineMediumSize       = `28px`
    public static readonly EmphasizedHeadlineMediumTracking   = `0px`
    public static readonly EmphasizedHeadlineMediumLineHeight = `36px`
    public static readonly EmphasizedHeadlineMediumWeight     = Typeface.WeightMedium

    public static readonly EmphasizedHeadlineSmallFont       = Typeface.Plain
    public static readonly EmphasizedHeadlineSmallSize       = `24px`
    public static readonly EmphasizedHeadlineSmallTracking   = `0px`
    public static readonly EmphasizedHeadlineSmallLineHeight = `32px`
    public static readonly EmphasizedHeadlineSmallWeight     = Typeface.WeightMedium

    public static readonly EmphasizedTitleLargeFont       = Typeface.Plain
    public static readonly EmphasizedTitleLargeSize       = `22px`
    public static readonly EmphasizedTitleLargeTracking   = `0px`
    public static readonly EmphasizedTitleLargeLineHeight = `28px`
    public static readonly EmphasizedTitleLargeWeight     = Typeface.WeightMedium

    public static readonly EmphasizedTitleMediumFont       = Typeface.Plain
    public static readonly EmphasizedTitleMediumSize       = `16px`
    public static readonly EmphasizedTitleMediumTracking   = `0.15px`
    public static readonly EmphasizedTitleMediumLineHeight = `24px`
    public static readonly EmphasizedTitleMediumWeight     = Typeface.WeightBold

    public static readonly EmphasizedTitleSmallFont       = Typeface.Plain
    public static readonly EmphasizedTitleSmallSize       = `14px`
    public static readonly EmphasizedTitleSmallTracking   = `0.1px`
    public static readonly EmphasizedTitleSmallLineHeight = `20px`
    public static readonly EmphasizedTitleSmallWeight     = Typeface.WeightBold

    public static readonly EmphasizedBodyLargeFont       = Typeface.Plain
    public static readonly EmphasizedBodyLargeSize       = `16px`
    public static readonly EmphasizedBodyLargeTracking   = `0.5px`
    public static readonly EmphasizedBodyLargeLineHeight = `24px`
    public static readonly EmphasizedBodyLargeWeight     = Typeface.WeightMedium

    public static readonly EmphasizedBodyMediumFont       = Typeface.Plain
    public static readonly EmphasizedBodyMediumSize       = `14px`
    public static readonly EmphasizedBodyMediumTracking   = `0.25px`
    public static readonly EmphasizedBodyMediumLineHeight = `20px`
    public static readonly EmphasizedBodyMediumWeight     = Typeface.WeightMedium

    public static readonly EmphasizedBodySmallFont       = Typeface.Plain
    public static readonly EmphasizedBodySmallSize       = `12px`
    public static readonly EmphasizedBodySmallTracking   = `0.4px`
    public static readonly EmphasizedBodySmallLineHeight = `16px`
    public static readonly EmphasizedBodySmallWeight     = Typeface.WeightMedium

    public static readonly EmphasizedLabelLargeFont       = Typeface.Plain
    public static readonly EmphasizedLabelLargeSize       = `14px`
    public static readonly EmphasizedLabelLargeTracking   = `0.1px`
    public static readonly EmphasizedLabelLargeLineHeight = `20px`
    public static readonly EmphasizedLabelLargeWeight     = Typeface.WeightBold

    public static readonly EmphasizedLabelMediumFont       = Typeface.Plain
    public static readonly EmphasizedLabelMediumSize       = `12px`
    public static readonly EmphasizedLabelMediumTracking   = `0.5px`
    public static readonly EmphasizedLabelMediumLineHeight = `16px`
    public static readonly EmphasizedLabelMediumWeight     = Typeface.WeightBold

    public static readonly EmphasizedLabelSmallFont       = Typeface.Plain
    public static readonly EmphasizedLabelSmallSize       = `11px`
    public static readonly EmphasizedLabelSmallTracking   = `0.5px`
    public static readonly EmphasizedLabelSmallLineHeight = `16px`
    public static readonly EmphasizedLabelSmallWeight     = Typeface.WeightBold
}
