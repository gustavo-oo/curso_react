import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";
import useVisible from "../hooks/useVisible";

export default function Home() {
  const {
    newClient, 
    selectedClient, 
    saveClient, 
    deletedClient, 
    client, 
    clients,
    visible,
    showTable
  } = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-400
      text-white
    `}>

      <Layout title="Simple Register">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={newClient}>New Client</Button>
            </div>

            <Table clients={clients} 
              selectedClient={selectedClient} 
              deletedClient={deletedClient}/>
          </>
        ) : (
          <Form 
            client={client} 
            changeClient={saveClient}
            cancel={() => showTable()}
          />
        )}
      </Layout>
    </div>
  )
}
