import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { Button } from "../../components/Button";
import { getValueDollar } from "../../services/coin";
import { ValueDollarProps } from "./types";

export function Home() {
  const [inputCoinValue, setInputCoinValue] = useState(0);
  const [inputRate, setInputRate] = useState(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [valueDollar, setValueDollar] = useState<number>(0);

  const handleConvert = () => {
    setTotalValue(1);
  };

  const handleBackToStart = () => {
    setTotalValue(0);
  };

  useEffect(() => {
    getValueDollar().then((response) => {
      console.log(response.data.value);
      response.data.value.map((item: ValueDollarProps) =>
        setValueDollar(item.cotacaoCompra)
      );
    });
  }, []);

  console.log(valueDollar);

  return (
    <div className="background-default">
      <div className="container d-flex flex-column gap-5 pt-5">
        <Header />

        <main className="d-flex flex-column gap-4 mt-5">
          {totalValue > 0 ? (
            <>
              <Button
                styleType="btn-light shadow-sm bg-transparent"
                icon="arrowLeft"
                onClick={handleBackToStart}
              >
                Voltar
              </Button>

              <div>
                <p className="fw-medium">O resultado do cálculo é</p>

                <h2 className="fw-medium fs-1 text-success">R$ 240,56</h2>
              </div>

              <div>
                <p className="text-light-emphasis">
                  Compra no dinheiro e taxa de 5.3%
                </p>
                <p className="text-light-emphasis">
                  Cotação do dólar: $1,00 = R$ 5,20
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-2">
                  <Input
                    name="coin"
                    placeholder="Dólar"
                    type="number"
                    onChange={setInputCoinValue}
                    value={inputCoinValue}
                  />
                </div>

                <div className="col-2">
                  <Input
                    name="rate"
                    placeholder="Taxa do Estado"
                    type="number"
                    onChange={setInputRate}
                    value={inputRate}
                  />
                </div>
              </div>

              <InputRadio />

              <Button
                styleType="btn-secondary"
                icon="change"
                onClick={handleConvert}
              >
                Converter
              </Button>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
