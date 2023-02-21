const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the same hash for empty object when given empty object as input", () => {
    const trivialKey = deterministicPartitionKey({});
    let hash = crypto.createHash("sha3-512").update("{}").digest("hex");
    expect(trivialKey).toBe(hash);
  });

  it("Returns the 12 when given partitionKey as 12 in input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "12" });
    expect(trivialKey).toBe("12")
  })
});
