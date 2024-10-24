export enum ErrorCode {
  EMAIL_NOT_CONFIRMED = "EMAIL_NOT_CONFIRMED",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  ANONYMOUS_PROVIDER_DISABLED = "ANONYMOUS_PROVIDER_DISABLED",
  BAD_CODE_VERIFIER = "BAD_CODE_VERIFIER",
  BAD_JSON = "BAD_JSON",
  BAD_JWT = "BAD_JWT",
  BAD_OAUTH_CALLBACK = "BAD_OAUTH_CALLBACK",
  BAD_OAUTH_STATE = "BAD_OAUTH_STATE",
  CAPTCHA_FAILED = "CAPTCHA_FAILED",
  CONFLICT = "CONFLICT",
  EMAIL_ADDRESS_NOT_AUTHORIZED = "EMAIL_ADDRESS_NOT_AUTHORIZED",
  EMAIL_CONFLICT_IDENTITY_NOT_DELETABLE = "EMAIL_CONFLICT_IDENTITY_NOT_DELETABLE",
  EMAIL_EXISTS = "EMAIL_EXISTS",
  EMAIL_PROVIDER_DISABLED = "EMAIL_PROVIDER_DISABLED",
  FLOW_STATE_EXPIRED = "FLOW_STATE_EXPIRED",
  HOOK_TIMEOUT = "HOOK_TIMEOUT",
  MFA_VERIFICATION_FAILED = "MFA_VERIFICATION_FAILED",
  PHONE_EXISTS = "PHONE_EXISTS",
  SAML_ASSERTION_NO_EMAIL = "SAML_ASSERTION_NO_EMAIL",
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  VALIDATION_FAILED = "VALIDATION_FAILED",
  WEAK_PASSWORD = "WEAK_PASSWORD",
}

export const errorMessages: Record<ErrorCode, string> = {
  [ErrorCode.EMAIL_NOT_CONFIRMED]:
    "Signing in is not allowed for this user as the email address is not confirmed.",
  [ErrorCode.INVALID_CREDENTIALS]:
    "Login credentials or grant type not recognized.",
  [ErrorCode.ANONYMOUS_PROVIDER_DISABLED]: "Anonymous sign-ins are disabled.",
  [ErrorCode.BAD_CODE_VERIFIER]:
    "Provided code verifier does not match the expected one.",
  [ErrorCode.BAD_JSON]: "The request body is not valid JSON.",
  [ErrorCode.BAD_JWT]: "JWT sent in the Authorization header is not valid.",
  [ErrorCode.BAD_OAUTH_CALLBACK]:
    "OAuth callback from provider to Auth does not have all required attributes.",
  [ErrorCode.BAD_OAUTH_STATE]: "OAuth state is not in the correct format.",
  [ErrorCode.CAPTCHA_FAILED]: "Captcha challenge could not be verified.",
  [ErrorCode.CONFLICT]:
    "General database conflict, such as concurrent requests on resources.",
  [ErrorCode.EMAIL_ADDRESS_NOT_AUTHORIZED]:
    "Email sending is not allowed for this address.",
  [ErrorCode.EMAIL_CONFLICT_IDENTITY_NOT_DELETABLE]:
    "Unlinking this identity causes conflict with another email account.",
  [ErrorCode.EMAIL_EXISTS]: "Email address already exists in the system.",
  [ErrorCode.EMAIL_PROVIDER_DISABLED]:
    "Signups are disabled for email and password.",
  [ErrorCode.FLOW_STATE_EXPIRED]:
    "PKCE flow state has expired. Please sign in again.",
  [ErrorCode.HOOK_TIMEOUT]:
    "Unable to reach hook within maximum time allocated.",
  [ErrorCode.MFA_VERIFICATION_FAILED]: "MFA challenge could not be verified.",
  [ErrorCode.PHONE_EXISTS]: "Phone number already exists in the system.",
  [ErrorCode.SAML_ASSERTION_NO_EMAIL]:
    "SAML assertion was received without an email address.",
  [ErrorCode.USER_ALREADY_EXISTS]: "User with this information already exists.",
  [ErrorCode.VALIDATION_FAILED]:
    "Provided parameters are not in the expected format.",
  [ErrorCode.WEAK_PASSWORD]: "Password does not meet strength criteria.",
};
