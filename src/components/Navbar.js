import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/articulos">Artículos</Link>
                <Link href="/proveedores">proveedores</Link>
            </div>
            <div>
                <Link href="/acerca">Acerca de ...</Link>
            </div>
        </nav>
    )
}

export default Navbar