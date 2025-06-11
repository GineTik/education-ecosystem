export function pullDomainFromEmail(email: string): string {
    return email.split("@")[1];
}
