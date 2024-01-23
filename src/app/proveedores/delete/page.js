import Form from "@/components/Form"
import { sql } from '@vercel/postgres';
import { deleteProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const { rows }  = await sql`select * from proveedores where id = ${searchParams.id};` 
  const proveedor = rows[0];

  return (
    <div>
      <h3>Eliminar proveedor {searchParams.id}</h3>
      <Form action={deleteProveedor} title='Eliminar artículo' proveedor={proveedor} disabled={true} />
    </div>
  )
}

export default page