import { useState, useEffect } from "react"

import Client from "../core/Client"

import { DbShow, DbDelete, DbSave } from "../backend/db/ClientCollection"
import useVisible from "./useVisible"

export default function useClients(){
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])
    const {visible, showTable, showForm} = useVisible()

    useEffect(showAll, [])

    function showAll(){
        DbShow().then(clients => {
        setClients(clients)
        showTable()
        })
    }

    function selectedClient(client: Client){
        setClient(client)
        showForm()
    }

    async function deletedClient(client: Client){
        await DbDelete(client)
        showAll()
    }

    async function saveClient(client: Client){
        await DbSave(client)
        showAll()
    }

    function newClient(){
        setClient(Client.empty())
        showForm()
    }

    return {
        newClient,
        selectedClient,
        saveClient,
        deletedClient,
        client,
        clients,
        visible,
        showTable
    }
}