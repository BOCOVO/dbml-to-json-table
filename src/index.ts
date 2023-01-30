import { Parser } from "@dbml/core";
import pickKeys from "json-pick-keys";
import defaultPickConfig from "./configs/pickKeys";

import type { JSONTableSchema } from "./types";

export const parseDBMLToJSON = (
  dbmlCode: string,
  pickConfig: Record<string, boolean> = defaultPickConfig
): JSONTableSchema[] => {
  const rawDataBase = Parser.parseDBMLToJSON(dbmlCode);
  return pickKeys(rawDataBase, pickConfig);
};
