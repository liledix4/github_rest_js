const types = [
  'Actions',
  'Activity',
  'Apps',
  'Billing',
  'Branches',
  'Checks',
  'Classroom',
  'Code scanning',
  'Code security settings',
  'Codes of conduct',
  'Codespaces',
  'Collaborators',
  'Commits',
  'Copilot',
  'Dependabot',
  'Dependency graph',
  'Deploy keys',
  'Deployments',
  'Emojis',
  'Gists',
  'Git database',
  'Gitignore',
  'Interactions',
  'Issues',
  'Licenses',
  'Markdown',
  'Meta',
  'Metrics',
  'Migrations',
  'Organizations',
  'Packages',
  'Pages',
  'Private registries',
  'Projects (classic)',
  'Pull requests',
  'Rate limit',
  'Reactions',
  'Releases',
  'Repositories',
  'Search',
  'Secret scanning',
  'Security advisories',
  'Teams',
  'Users'
];
const selectors = {
  types: document.getElementById('type'),
};


types.forEach(type => {
  const newOption = document.createElement('option');
  const optionContent = document.createTextNode(type);
  newOption.appendChild(optionContent);
  newOption.setAttribute('value', type.toLowerCase().replaceAll(/[^0-9A-Za-z]+/g, '_').replaceAll(/^[^0-9A-Za-z]+|[^0-9A-Za-z]+$/g, ''));
  selectors.types.appendChild(newOption);
});