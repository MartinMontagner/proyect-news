export default function LayoutPage({archive,latest}){
    return(
        <div>
            <h1>Archivo de Noticias</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    )
}