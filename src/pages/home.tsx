import { useDialog } from "@/contexts/dialog.context"
import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"

export default function Home() {
  const dialog = useDialog()

  return (
    <Container>
      <Button
        onClick={function () {
          dialog.open({
            id: "dialog1",
            title: "Dialog 1",
            onClose() {
              dialog.close("dialog1")
            },
            children: (
              <Button
                onClick={async function () {
                  dialog.open({
                    id: "dialog2",
                    title: "Dialog 2",
                    onClose() {
                      dialog.close("dialog2")
                    },
                  })
                }}
              >
                Open dialog 2
              </Button>
            ),
          })
        }}
      >
        Dialog 1
      </Button>
    </Container>
  )
}
