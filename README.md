# Unexpected Behavior of $inc Operator with Negative Values in MongoDB
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB with negative values. The `$inc` operator is typically used to increment a numeric field. However, when using a negative value, it can lead to unexpected outcomes if the field is uninitialized or if no matching documents exist.

## Bug Description
The provided code snippet attempts to decrement a counter field using `$inc: { sequence: -1 }`. If the `sequence` field does not exist for a given document, the `updateOne` operation will not modify it, which might not be the desired behavior.  Additionally, if the query doesn't match any documents, no error is thrown, potentially hiding the issue.

## Solution
The solution involves using the `$inc` operator only when there are matching documents, and handling cases where the field might be absent. One possible solution involves using `findOneAndUpdate` with an upsert option.