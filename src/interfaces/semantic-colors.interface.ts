import type { SemanticColorNames } from './semantic-color-names.interface.js'

export type SemanticColors<V = string> = Record<SemanticColorNames, V>
