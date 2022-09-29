import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SnacksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Test {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly desription?: string | null;
  readonly quantity?: string | null;
  readonly instruction?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Test, TestMetaData>);
  static copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}

export declare class Snacks {
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly quantity?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Snacks, SnacksMetaData>);
  static copyOf(source: Snacks, mutator: (draft: MutableModel<Snacks, SnacksMetaData>) => MutableModel<Snacks, SnacksMetaData> | void): Snacks;
}