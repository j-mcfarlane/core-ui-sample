export const Role = {
    DEVELOPER: 'DEVELOPER',
    OWNER: 'OWNER',
    LEAD: 'LEAD',
    OPERATOR: 'OPERATOR',
    USER: 'USER',
} as const

export type Role = (typeof Role)[keyof typeof Role]

/**
 * Role Definitions:
 *
 * - **DEVELOPER**:
 *   Grants full access to the platform, allowing the user to navigate and perform any actions necessary for development and troubleshooting.
 *   This role is intended for developers responsible for maintaining and enhancing the platform.
 *
 * - **OWNER**:
 *   Holds the highest level of authority on the platform. This role has all permissions, including those of the DEVELOPER role,
 *   and signifies ownership of the platform.
 *
 * - **LEAD**:
 *   Represents a senior staff member with comprehensive control over the platform.
 *   This role grants nearly all permissions except those exclusive to the OWNER. Admins can manage other users, including operators and developers,
 *   but cannot override or modify OWNER permissions.
 *
 * - **OPERATOR**:
 *   A staff-level role with permissions tailored to their specific responsibilities.
 *   Operators are assigned privileges based on their role within the organization and may have limited access to sensitive areas.
 *
 * - **USER**:
 *   The default consumer-level role. This role is for end-users who utilize the platform's services or products,
 *   typically with the least amount of permissions.
 */
