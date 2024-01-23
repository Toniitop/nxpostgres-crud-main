

function Proveedor({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{proveedor.id}</strong></p>
            <p>{proveedor.nombre}</p>
            <p>{proveedor.telefono} €</p>
            {children}
        </div>
    )
}

export default Proveedor