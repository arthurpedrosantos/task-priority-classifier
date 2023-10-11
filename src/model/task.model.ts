export type PriorityType = "low" | "medium" | "high" | "critical";

export interface Task {
  id: number;
  name: string;
}

export interface Priority {
  maxRange: number;
  minRange: number;
  value: PriorityType;
  tasks: Task[];
}

class LowPriority implements Priority {
  minRange: number = 0;
  maxRange: number = 0.3;
  value: PriorityType = "low";

  public get tasks(): Task[] {
    return [
      {
        id: 1,
        name: "Criar simulado personalizado",
      },
    ];
  }
}

class MediumPriority implements Priority {
  minRange: number = 0.31;
  maxRange: number = 0.5;
  value: PriorityType = "medium";

  public get tasks(): Task[] {
    return [
      {
        id: 4,
        name: "Criar simulado personalizado",
      },
      {
        id: 5,
        name: "Criar simulado inteligente",
      },
    ];
  }
}

class HighPriority implements Priority {
  minRange: number = 0.51;
  maxRange: number = 0.7;
  value: PriorityType = "high";

  public get tasks(): Task[] {
    return [
      {
        id: 7,
        name: "Criar simulado inteligente",
      },
      {
        id: 8,
        name: "Criar simulado personalizado",
      },
      {
        id: 9,
        name: "Responder prova",
      },
    ];
  }
}

class CriticalPriority implements Priority {
  minRange: number = 0.71;
  maxRange: number = 999;
  value: PriorityType = "critical";

  public get tasks(): Task[] {
    return [
      {
        id: 7,
        name: "Criar simulado inteligente",
      },
      {
        id: 8,
        name: "Criar simulado personalizado",
      },
      {
        id: 9,
        name: "Responder prova",
      },
      {
        id: 10,
        name: "Cancelar prova",
      },
      {
        id: 11,
        name: "Cadastrar aluno",
      },
      {
        id: 12,
        name: "...",
      },
    ];
  }
}

export const priorities: Priority[] = [
  new LowPriority(),
  new MediumPriority(),
  new HighPriority(),
  new CriticalPriority(),
];
