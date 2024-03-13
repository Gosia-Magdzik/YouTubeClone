import { cva } from "class-variance-authority";

const ButtonStyles = cva(["hover:bg-secondary-hover",
"transition-colors"], {
  variants: {
    size: {
      default: [],
      icon: []
    }
  }
})

const classes = ButtonStyles({ size: "icon" })

export const Button = () => {
  return (
    <button>Button</button>
  )
}
