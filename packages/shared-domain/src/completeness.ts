export interface MissingDocument {
  code: string;
  reason: 'required_by_rule';
}

export interface CompletenessResult {
  isComplete: boolean;
  missing: MissingDocument[];
}

export function evaluateCompleteness(
  requiredDocuments: string[],
  uploadedDocuments: string[]
): CompletenessResult {
  const uploadedSet = new Set(uploadedDocuments);
  const missing = requiredDocuments
    .filter((documentCode) => !uploadedSet.has(documentCode))
    .map((code) => ({ code, reason: 'required_by_rule' as const }));

  return {
    isComplete: missing.length === 0,
    missing
  };
}
