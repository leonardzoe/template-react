import { Clipboard } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { clipboard } from "./variants"

const { withRoot, withSlot } = createCtx(clipboard)

const Root = withRoot(Clipboard.Root)
const RootProvider = withRoot(Clipboard.RootProvider)
const Context = withSlot(Clipboard.Context)
const Control = withSlot(Clipboard.Control)
const Indicator = withSlot(Clipboard.Indicator)
const Input = withSlot(Clipboard.Input)
const Label = withSlot(Clipboard.Label)
const Trigger = withSlot(Clipboard.Trigger)

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  Indicator,
  Input,
  Label,
  Trigger,
})

Component.displayName = "Clipboard"
