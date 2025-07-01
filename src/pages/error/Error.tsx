import { useRouteError } from "react-router-dom";
import { PageContent } from "../../components/pageContent";
import { ErrorWrap } from "./Error.styles";

interface RouteError {
  status: number;
  data: {
    title: string;
    message: string;
  };
}

export const ErrorPage = () => {
  const error = useRouteError() as RouteError | null;
  let title = "Error";
  let message = "Ops, algo errado aconteceu.";

  if (error?.status === 500) {
    message = error.data?.message || message;
  }

  if (error?.status === 404) {
    title = "Not found";
    message = "Página não encontrada.";
  }

  return (
    <ErrorWrap>
      <PageContent title={title}>         
        <p>{message}</p>
      </PageContent>
    </ErrorWrap>
  );
}

