import React from "react"
import { Button } from "../ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-20">
      <div className="">
        <div>
          <span>Nome</span>
          <Input/>
        </div>
        <div>
          <span>E-mail</span>
          <Input/>
        </div>
        <div>
          <span>Sua mensagem</span>
          <Textarea />
        </div>
      </div>
      <Button variant="secondary">Enviar</Button>
    </div>
  )
}
