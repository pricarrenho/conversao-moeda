import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { Button } from "../../components/Button";
import { useHome } from "./useHome";

export function Home() {
  const {
    handleConvert,
    handleInputCoinValue,
    validateInputCoinValue,
    inputCoinValue,
    error,
  } = useHome();

  return (
    <div className="background-default">
      <div className="container d-flex flex-column gap-2 gap-lg-5 pt-5">
        <Header />

        <main className="d-flex flex-column gap-4 mt-5">
          <div className="d-flex flex-column align-items-start gap-1">
            <div>
              <Input
                name="coin"
                placeholder="Dólar"
                onChange={(e) => {
                  handleInputCoinValue(e);
                  validateInputCoinValue(e);
                }}
                value={inputCoinValue}
              />
            </div>

            {error && <p className="text-danger">{error}</p>}
          </div>

          <InputRadio />

          <Button
            styleType="btn-secondary"
            icon="change"
            onClick={handleConvert}
          >
            Converter
          </Button>
        </main>
      </div>
    </div>
  );
}
