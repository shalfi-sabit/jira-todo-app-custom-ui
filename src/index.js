import Resolver from "@forge/resolver";
import { storage } from "@forge/api";

import { getListKeyFromContext, getUniqueId } from "./utils/helper";

const resolver = new Resolver();

const getAll = async (listId) => (await storage.get(listId)) || [];

resolver.define("get-all", async ({ context }) => {
  return getAll(getListKeyFromContext(context));
});

resolver.define("create", async ({ payload, context }) => {
  const records = await getAll(getListKeyFromContext(context));
  const id = getUniqueId(context);

  const newRecord = {
    id,
    ...payload,
  };

  await storage.set(getListKeyFromContext(context), [...records, newRecord]);

  return newRecord;
});

resolver.define("update", async ({ payload, context }) => {
  let records = await getAll(getListKeyFromContext(context));

  records = await records.map((record) => {
    if (record.id === payload.id) {
      return payload;
    }
    return record;
  });

  await storage.set(getListKeyFromContext(context), records);

  return payload;
});

resolver.define("delete", async ({ payload, context }) => {
  let records = await getAll(getListKeyFromContext(context));

  records = records.filter((record) => record.id !== payload.id);

  await storage.set(getListKeyFromContext(context), records);

  return payload;
});

resolver.define(
  "delete-all",
  async ({ context }) => await storage.set(getListKeyFromContext(context), [])
);

export const handler = resolver.getDefinitions();
