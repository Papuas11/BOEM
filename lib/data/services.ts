export type Service = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
};

export const services: Service[] = [
  { slug: 'atex-iecex', title: 'ATEX / IECEx', summary: 'Explosion protection certification for hazardous environments.', scope: ['ATEX 2014/34/EU', 'IECEx schemes', 'Pre-assessment and documentation review'] },
  { slug: 'testing-laboratory', title: 'Testing & Laboratory Services', summary: 'Structured test programs aligned to product risks and standards.', scope: ['Ex d / Ex e / Ex i / Ex t', 'Destructive / non-destructive tests', 'Lab planning and evidence packages'] },
  { slug: 'ce-eu-directives', title: 'CE / EU Directives', summary: 'EU market access with directive mapping and technical files.', scope: ['EMC / LVD / RED', 'Machinery / PED / RoHS', 'Conformity documentation support'] },
  { slug: 'iso-certification', title: 'ISO Certification', summary: 'Management systems for quality, safety, and sustainability.', scope: ['ISO 9001 / 14001 / 45001', 'ISO 22000 / 13485', 'Audit readiness planning'] },
  { slug: 'food-safety', title: 'Food Safety', summary: 'Food chain compliance and certification frameworks.', scope: ['ISO 22000', 'OIC/SMIIC 1:2019', 'Traceability and process controls'] },
  { slug: 'gcc-certification', title: 'GCC Certification', summary: 'Support for Gulf market requirements and approvals.', scope: ['SASO', 'SFDA', 'MoIAT'] },
  { slug: 'third-party-inspection', title: 'Third-Party Inspection', summary: 'Independent inspection according to recognized international practices.', scope: ['ISO/IEC 17020', 'PPI / DPI / PSI/FAT', 'Loading & discharge monitoring'] },
  { slug: 'consultancy', title: 'Consultancy', summary: 'Practical compliance strategy from scoping to certification delivery.', scope: ['Requirement mapping', 'Gap analysis', 'Cross-country roadmap'] }
];
