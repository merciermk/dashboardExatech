
interface Dashboard {
  readonly name: string; // Nom Menu
  readonly id?: string;
  readonly auth?: string[] | boolean[]; // Array de droits
  readonly path?: string[]
  readonly typeOfCard?: unknown
}

export { Dashboard }
