import { Status } from "@/components/tag";

export const tags: { key: Status; label: string; weight: number }[] = [
  {
    key: "bug",
    label: "Hot fix",
    weight: 1,
  },
  {
    key: "feature",
    label: "Nova feature",
    weight: 1,
  },
  {
    key: "ruby",
    label: "Ruby",
    weight: 0.3,
  },
  {
    key: "css",
    label: "CSS",
    weight: 0.1,
  },
  {
    key: "refactory",
    label: "Refactory",
    weight: 0.3,
  },
];
