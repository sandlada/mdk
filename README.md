# @glare-labs/mdk

@glare-labs/mdk, Material Design Kit, mdk is a JavaScript constant library based on Material Design 3, providing constant data such as color, shape, shadow level, etc:

+ Palettes
+ DefaultDarkColors
+ DefaultLightColors
+ MaterialVariants
+ ElevationBoxShaodws
+ ElevationLevels
+ MaterialContrastLevels
+ MotionDurations
+ MotionEasings
+ Shapes
+ md

mdk also provides a default style sheet:

+ color.css
+ palette-atom.css
+ palette.css

## Installation

```shell
npm i @glare-labs/mdk
```

## Usage

### Use colors

```typescript
import { md } from '@glare-labs/mdk'

const surface = md.sys.color.surface

/**
 * @output
 * ```
 * light-dark(var(--md-sys-palette-neutral-98, #fef7ff), var(--md-sys-palette-neutral-6, #141218))
 * ```
 */
console.log(surface)

const yourDiv = document.querySelector('body') as HTMLElement
yourDiv.style.setProperty('background-color', surface)
```

### Use shapes

```typescript
const shapeLarge = md.sys.shape.large

/**
 * @output
 * ```
 * 16px
 * ```
 */
console.log(shapeLarge)

const myBox = document.querySelector('#my-box') as HTMLElement
myBox.style.setProperty('border-radius', shapeLarge)
```

### Import styles

```typescript
import '@glare-labs/mdk/styles/color.css'
import '@glare-labs/mdk/styles/palette.css'
import '@glare-labs/mdk/styles/palette-atom.css'
```