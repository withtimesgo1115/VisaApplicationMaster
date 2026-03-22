export interface CreateRuleDto {
  destinationCode: string;
  visaType: string;
  version: string;
  sourceUrl: string;
  requiredDocuments: string[];
}
