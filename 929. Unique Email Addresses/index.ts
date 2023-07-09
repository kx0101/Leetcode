function numUniqueEmails(emails: string[]): number {
    let uniqueEmails: Set<string> = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');

        local = local.split('+')[0].replace(/\./g, '');

        uniqueEmails.add(`${local}@${domain}`);
    }

    return uniqueEmails.size;
};
