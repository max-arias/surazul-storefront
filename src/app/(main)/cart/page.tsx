import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carito",
  description: "Ver tu carrito",
}

export default function Cart() {
  return <CartTemplate />
}
