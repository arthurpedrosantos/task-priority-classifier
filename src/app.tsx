import { Textarea } from "@/components/ui/textarea";
import { Github, Wand2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Tag } from "./components/tag";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Slider } from "./components/ui/slider";
import { Priority, priorities } from "./model/task.model";
import { tags } from "./model/tag.model";

export function App() {
  const [temperature, setTemperature] = useState(0.5);
  const [priority, setPriority] = useState<Priority | undefined>();
  const [totalWeight, setTotalWeight] = useState<number>(0);

  const handleSwitchChange = (weight: number, isChecked: boolean) => {
    if (isChecked) {
      setTotalWeight(totalWeight + weight);
    } else {
      setTotalWeight(totalWeight - weight);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    const priority = priorities.find(
      (priority) =>
        totalWeight <= priority.maxRange && totalWeight >= priority.minRange
    );
    setPriority(priority);
  };

  function getTasks(): string {
    return (
      priority?.tasks.map((task) => task.name).join("\n") ||
      "Selecione as tags para calcular a prioridade do PR entrar em produção..."
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="">task-priority-classifier.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por EMR
          </span>
          <Separator orientation="vertical" className="h-6"></Separator>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className=" grid grid-rows-1 gap-4 flex-1">
            <Textarea
              value={getTasks()}
              onChange={() => {}}
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            ></Textarea>
          </div>

          <p className="text-sm text-muted-foreground">
            Desenvolvido por EMR @copyright Todos os direitos reservados.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <Separator />

            {tags.map((tag) => (
              <Tag
                status={tag.key}
                key={`${tag.key}-${tag.label}`}
                label={tag.label}
                weight={tag.weight}
                onSwitchChange={handleSwitchChange}
              />
            ))}

            <Separator />

            <p>
              <span className="font-semibold">Prioridade:</span>{" "}
              {priority?.value}
            </p>

            <Separator />
            <div className="space-y-2">
              <Label>Peso</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={[totalWeight]}
                onValueChange={(value) => setTemperature(value[0])}
              ></Slider>

              <span className="block text-xs text-muted-foreground italic">
                Valores mais altos indicam uma alta prioridade do PR entrar em
                produção
              </span>
            </div>

            <Separator />

            <Button onClick={handleSubmit} type="submit" className="w-full">
              Calcular
              <Wand2 className="w-4 h-4 ml-2"></Wand2>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
