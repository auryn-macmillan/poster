// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Post entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Post entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Post", id.toString(), this);
  }

  static load(id: string): Post | null {
    return store.get("Post", id) as Post | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poster(): Bytes {
    let value = this.get("poster");
    return value.toBytes();
  }

  set poster(value: Bytes) {
    this.set("poster", Value.fromBytes(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }
}
