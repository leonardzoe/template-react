import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <Container>
      <Button
        variant="shadow"
        color={theme === "dark" ? "secondary" : "default"}
        onClick={function () {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
        startContent={theme === "dark" ? <LuMoon /> : <LuSun />}
      >
        Button
      </Button>
    </Container>
  )
}
