import { Accordion } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { accordion } from "./variants"

const { withRoot, withSlot } = createCtx(accordion)

const Root = withRoot(Accordion.Root, "base")
const RootProvider = withSlot(Accordion.RootProvider, "base")
const Context = withSlot(Accordion.Context)
const ItemContext = withSlot(Accordion.ItemContext)
const Item = withSlot(Accordion.Item, "item")
const ItemTrigger = withSlot(Accordion.ItemTrigger, "itemTrigger")
const ItemContent = withSlot(Accordion.ItemContent, "itemContent")
const ItemIndicator = withSlot(Accordion.ItemIndicator, "itemIndicator")

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  ItemContext,
  Item,
  ItemTrigger,
  ItemContent,
  ItemIndicator,
})

Component.displayName = "Accordion"
