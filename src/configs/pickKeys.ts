const defaultPickConfig = {
  // refs
  "refs.name": true,

  // refs enpoints
  "refs.endpoints.relation": true,
  "refs.endpoints.d": true,
  "refs.endpoints.fieldNames": true,

  // enums
  "enums.name": true,
  "enums.note": true,

  // enums values
  "enums.values.name": true,
  "enums.values.note": true,

  // tables
  "tables.name": true,
  "tables.note": true,
  "tables.headerColor": true,

  // tables fields
  "tables.fields.name": true,
  "tables.fields.type": true,
  "tables.fields.pk": true,
  "tables.fields.unique": true,
  "tables.fields.note": true,
  "tables.fields.increment": true,
  "tables.fields.not_null": true,
  "tables.fields.dbdefault": true,

  // tables indexes
  "tables.indexes.unique": true,
  "tables.indexes.type": true,
  "tables.indexes.pk": true,
  "tables.indexes.name": true,
  "tables.indexes.note": true,

  // tables indexes columns
  "tables.indexes.columns.type": true,
  "tables.indexes.columns.value": true,
};

export default defaultPickConfig;
