export interface ApplicantProfile {
  occupation: string;
  annualIncomeCny: number;
  hasProperty: boolean;
}

export interface CreateCaseDto {
  destinationCode: string;
  visaType: string;
  applicantProfile: ApplicantProfile;
}
