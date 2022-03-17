import P from "prop-types";
import { GridContent } from "../../components/GridContent";

export function PageNotFound() {
  return (
    <GridContent
      title="Erro 404"
      html="<p>A página procurada não foi encontrada. <a href='/'>Clique aqui para voltar</a></p>"
    />
  );
}
