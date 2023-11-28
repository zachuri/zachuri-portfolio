export type WorkflowItem = {
  name: string;
  type: number;
};

export type WorkflowCategory = {
  type: number;
  name: string;
};

export const workflowCategories: WorkflowCategory[] = [
  { type: 1, name: 'Technologies' },
  { type: 2, name: 'Computer Specs' },
  { type: 3, name: 'Keyboards' }
];

export const workflowConfig = {
  workflow: [
    // Technologies
    { name: 'Arch Linux', type: 1 },
    { name: 'Dynamic Window Manager', type: 1 },
    { name: 'Visual Studio Code', type: 1 },
    { name: 'Vi/Vim', type: 1 },
    { name: 'Tmux', type: 1 },
    { name: 'Zsh', type: 1 },
    { name: 'Bash', type: 1 },

    // Workflow
    { name: 'AMD Ryzen 5900x', type: 2 },
    { name: 'GeForce RTX 2060', type: 2 },
    { name: 'MSI MPG B550 GAMING PLUS', type: 2 },
    { name: 'NZXT 850w Gold', type: 2 },
    { name: 'Corsair Vengeance LPX 16GB', type: 2 },
    { name: 'NZXT H510', type: 2 },

    // Keyboards
    { name: 'JP-02 (Arisu)', type: 3 },
    { name: 'Tofu 60 (60%)', type: 3 }
  ]
};
