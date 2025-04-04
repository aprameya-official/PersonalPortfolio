export interface IDonation {
  reference_no: string;
  amount: number;
  amount_label: string;
  donation: Donation;
  replies: Replies | null;
  date: string;
}

export interface Donation {
  supporter_name: string | null;
  supporter_message: string | null;
  beneficiary_message: BeneficiaryMessage;
  is_hidden: number;
  replies: Replies;
  goal_details: GoalDetails;
}

export interface BeneficiaryMessage {
  title: string;
  message: string;
  type: string;
}

export interface GoalDetails {
  id: number;
  title: string;
  description: null;
  thumbnail_url: string;
}

export interface Replies {
  message: string;
}
