import { QrCode } from "@ark-ui/react"
import { createComponentTree, createCtx } from "../utils"
import { qrCode } from "./variants"

const { withRoot, withSlot } = createCtx(qrCode)

const Root = withRoot(QrCode.Root)
const RootProvider = withRoot(QrCode.RootProvider)
const Context = withSlot(QrCode.Context)
const Frame = withSlot(QrCode.Frame)
const Overlay = withSlot(QrCode.Overlay)
const Pattern = withSlot(QrCode.Pattern)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Frame,
  Overlay,
  Pattern,
})

Component.displayName = "QrCode"
