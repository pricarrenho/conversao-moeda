import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { formattedPrice } from "../../utils/formattedPrice";
import { useResult } from "./useResult";

export function Result() {
  const { handleBackToStart, totalValue, valueDollar, name, taxa } =
    useResult();

  return (
    <div className="background-default">
      <div className="container d-flex flex-column gap-2 gap-lg-5 pt-5">
        <Header />

        <main className="d-flex flex-column gap-4 mt-5">
          <Button
            styleType="btn-light shadow-sm bg-transparent"
            icon="arrowLeft"
            onClick={handleBackToStart}
          >
            Voltar
          </Button>

          <div>
            <p className="text-light-emphasis fw-bolder">
              O resultado do cálculo é
            </p>

            <h2 className="fw-medium fs-1 text-success">
              {formattedPrice.format(totalValue)}
            </h2>
          </div>

          <div>
            <p className="text-light-emphasis">
              Compra no <span className="fw-medium">{name}</span> e taxa de{" "}
              <span className="fw-medium">{taxa}</span>
            </p>
            <p className="text-light-emphasis">
              <span className="fw-medium">Cotação do dólar: </span>
              {formattedPrice.format(valueDollar)}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
