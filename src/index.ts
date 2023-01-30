import { Parser } from "@dbml/core";
import pickKeys from "json-pick-keys-2";
import defaultPickConfig from "./configs/defaultKeys";

import type { JSONTableSchema } from "./types";

export const parseDBMLToJSON = (
  dbmlCode: string,
  pickConfig: Record<string, 0 | 1> = defaultPickConfig
): JSONTableSchema[] => {
  const rawDataBase = Parser.parseDBMLToJSON(dbmlCode);
  return pickKeys(rawDataBase, pickConfig);
};
