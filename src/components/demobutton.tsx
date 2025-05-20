'use client'
import Button, { ButtonVariant, ButtonSize } from "./ui/button";

export default  function DemoButton() {
    return(
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE} onClick={() => alert("Button clicked!")}>
            Click Me
        </Button>
    )
}