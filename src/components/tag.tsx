import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Switch } from "./ui/switch";

export type Status = "bug" | "feature" | "ruby" | "css" | "refactory";

interface TagProps {
  status: Status;
  label: string;
  weight: number;
  onSwitchChange: (weight: number, isChecked: boolean) => void;
}

export function Tag(props: TagProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleSwitchChange = () => {
    setChecked(!checked);
    props.onSwitchChange(props.weight, !checked);
  };

  return (
    <div className="flex justify-between items-center">
      <Label>{props.label}</Label>
      <Switch onClick={handleSwitchChange} checked={checked}></Switch>
    </div>
  );
}
