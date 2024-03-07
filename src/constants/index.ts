import { GetCharactersFilters } from "@/modules/character-list";

export const queryKeys = {
  getCharacters: (filters: GetCharactersFilters) => ["characters", filters],
  getCharacter: (characterId: number) => ["character", characterId],
  getCharacterComics: (characterId: number) => [
    "characters",
    "comics",
    characterId,
  ],
};
