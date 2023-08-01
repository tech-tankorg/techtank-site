export interface Enforcement {
  id: number;
  title: string;
  text: string;
}

export interface Unacceptable {
  id: string;
  title: string;
  text: string;
}

export interface Referrals {
  id: number;
  title: string;
  text: string;
}

export interface PageConstants {
  SCOPE_TEXT: string;
  ENFORCEMENT_TEXT: string;
  ENFORCEMENT_LIST: Enforcement[];
  UNACCEPTABLE_BEHAVIOR: Unacceptable[];
  EXAMPLES_UNACCEPTABLES: Array<string>;
  EXAMPLES_ACCEPTABLES: Array<string>;
  REFERRAL_POLICY_TEXT: string;
  REFERRAL_POLICIES: Referrals[];
  REFERRAL_POLICY_CONCL: string;
}
