import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MainNglCanvas from "./NglCanvasEditor"

export function MoleculeEditor() {
  return (
    <div className="grid h-full  w-full border-b-2">

      <div className="flex flex-col">

        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex border-r-2 pr-6" x-chunk="dashboard-03-chunk-0"
          >
           <form className="grid w-full items-start gap-6">
  <fieldset className="grid gap-6 rounded-lg border p-4">
    <legend className="-ml-1 px-1 text-sm font-medium">Protein Editor Settings</legend>
    
    <div className="grid gap-3">
      <Label htmlFor="protein-type">Protein Type</Label>
      <Select>
        <SelectTrigger
          id="protein-type"
          className="items-start [&_[data-description]]:hidden"
        >
          <SelectValue placeholder="Select a protein type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="enzyme">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Protein{" "}
                  <span className="font-medium text-foreground">
                    Enzyme
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Proteins that catalyze biochemical reactions.
                </p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="receptor">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Protein{" "}
                  <span className="font-medium text-foreground">
                    Receptor
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Proteins that bind to specific molecules.
                </p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="antibody">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Protein{" "}
                  <span className="font-medium text-foreground">
                    Antibody
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Proteins that are part of the immune response.
                </p>
              </div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="grid gap-3">
      <Label htmlFor="binding-affinity">Binding Affinity (kcal/mol)</Label>
      <Input id="binding-affinity" type="number" placeholder="-7.5" />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-3">
        <Label htmlFor="sequence-length">Sequence Length</Label>
        <Input id="sequence-length" type="number" placeholder="200" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="mutation-rate">Mutation Rate</Label>
        <Input id="mutation-rate" type="number" placeholder="0.01" />
      </div>
    </div>

    <div className="grid gap-3">
      <Label htmlFor="structure-type">Structure Type</Label>
      <Select>
        <SelectTrigger
          id="structure-type"
          className="items-start [&_[data-description]]:hidden"
        >
          <SelectValue placeholder="Select a structure type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alpha-helix">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Structure{" "}
                  <span className="font-medium text-foreground">
                    Alpha Helix
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Common structural motif in proteins.
                </p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="beta-sheet">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Structure{" "}
                  <span className="font-medium text-foreground">
                    Beta Sheet
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Structure formed by beta strands.
                </p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="random-coil">
            <div className="flex items-start gap-3 text-muted-foreground">
              <div className="grid gap-0.5">
                <p>
                  Structure{" "}
                  <span className="font-medium text-foreground">
                    Random Coil
                  </span>
                </p>
                <p className="text-xs" data-description>
                  Irregular protein structure.
                </p>
              </div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
      <div className="w-full">
        <Button size={"sm"} >Checkout my startup</Button>
      </div>
  </fieldset>
</form>

          </div>
          <div className="relative flex h-full min-h-[30vh] flex-col rounded-xl  p-4 lg:col-span-2">
            <MainNglCanvas />
            <div>

            </div>
            <div className="absolute right-3 top-3 p-3 ">
            <Badge variant="outline" className="mr-5" >
              Output
            </Badge>
            <Badge variant="default" >
              Live Screening
            </Badge>
            </div>
            <div className="absolute right-3 bottom-3 w-full mt-12">
        
            </div>
            <div className="flex-1" />
          </div>
        </main>
      </div>
    </div>
  )
}
