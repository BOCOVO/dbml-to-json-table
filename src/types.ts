import type Endpoint from "@dbml/core/types/model_structure/endpoint";
import type Enum from "@dbml/core/types/model_structure/enum";
import type Field from "@dbml/core/types/model_structure/field";
import type IndexColumn from "@dbml/core/types/model_structure/indexColumn";
import type Index from "@dbml/core/types/model_structure/indexes";
import type Ref from "@dbml/core/types/model_structure/ref";
import type Schema from "@dbml/core/types/model_structure/schema";
import type Table from "@dbml/core/types/model_structure/table";

export interface JSONTableSchema {
  refs: JSONTableRef;
  enums: JSONTableEnum[];
  tables: JSONTableTable;
}

export interface JSONTableEnum extends Pick<Enum, "id" | "name" | "note"> {}

export interface JSONTableRef extends Pick<Ref, "id" | "name"> {
  endpoints: Pick<Endpoint, "relation" | "tableName" | "fieldNames">;
}

export interface JSONTableField
  extends Pick<
    Field,
    | "name"
    | "type"
    | "pk"
    | "unique"
    | "note"
    | "increment"
    | "not_null"
    | "dbdefault"
  > {}

export interface JSONTableIndexColumn
  extends Pick<IndexColumn, "id" | "type" | "value"> {}
export interface JSONTableIndex
  extends Pick<Index, "unique" | "type" | "pk" | "name" | "note"> {
  columns: JSONTableIndexColumn[];
}
export interface JSONTableTable
  extends Pick<Table, "name" | "note" | "headerColor"> {
  fields: JSONTableField[];
  indexes: JSONTableIndex[];
  schemaName?: string | null;
  schema: Pick<Schema, "name" | "alias" | "note">;
}
