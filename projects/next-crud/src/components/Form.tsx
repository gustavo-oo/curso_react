import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps{
    client?: Client
    cancel?: () => void
    changeClient?: (client: Client) => void
}

export default function Form(props: FormProps){
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return(
        <div>
            {id ? <Input label="Code" value={id} readOnly/> : false}
            <Input label="Name" value={name} onChange={setName}/>
            <Input label="Age" type="number" value={age} onChange={setAge}/>

            <div className="flex flex-row justify-end mt-7">
                <Button color="blue" className="mr-2" 
                    onClick={() => {
                        props.changeClient?.(new Client(name, +age, id))
                    }}>

                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button color="gray" onClick={() => props.cancel?.()}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}