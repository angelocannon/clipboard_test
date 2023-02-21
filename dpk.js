const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

//get hash iwth sha
const hash = crypto.createHash("sha3-512");

//check candidate date type
const isNotString = (data) => {
  return typeof data !== "string";
}

//check max length valid
const isLengthNotValid = (data) => {
  return data.length > MAX_PARTITION_KEY_LENGTH;
}

/**
 * @param event Event object {partitionKey?: string}
 * @returns if event is not exsited it is TRIVIAL_PARTITION_KEY else it is hex representation of the event
 */
exports.deterministicPartitionKey = (event) => {

  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate;


  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = hash.update(data).digest("hex");
  }

  if (isNotString(candidate)) {
    candidate = JSON.stringify(candidate);
  }

  if (isLengthNotValid(candidate)) {
    candidate = hash.update(candidate).digest("hex");
  }

  return candidate;
}