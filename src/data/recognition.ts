// Only entries the owner has confirmed. Add `href` (the acknowledgement page) and `detail` (year, scope)
// as each one is verified; the section renders them automatically when present.
export type Recognition = {
  name: string;
  group: "Record" | "Vendor Hall of Fame" | "Bounty platform";
  handle?: string;
  href?: string;
  detail?: string;
  note?: string;
};

export const recognition: Recognition[] = [
  { name: "India Book of Records", group: "Record", detail: "IBR Achiever", note: "Identified 119 critical web vulnerabilities in 3 hours using advanced OSINT and non-intrusive reconnaissance. Confirmed 29 May 2025.", href: "https://indiabookofrecords.in/adarsh-s-ibr-achiever/" },
  { name: "Microsoft MSRC", group: "Vendor Hall of Fame" },
  { name: "Amazon Web Services", group: "Vendor Hall of Fame" },
  { name: "Oracle", group: "Vendor Hall of Fame" },
  { name: "HackerOne", group: "Bounty platform", handle: "adarshsreedhar", href: "https://hackerone.com/adarshsreedhar?type=user" },
  { name: "Bugcrowd", group: "Bounty platform", handle: "adarshsreedhar", href: "https://bugcrowd.com/h/adarshsreedhar" },
  { name: "YesWeHack", group: "Bounty platform", handle: "adarshsreedhar", href: "https://yeswehack.com/hunters/adarshsreedhar" },
];
