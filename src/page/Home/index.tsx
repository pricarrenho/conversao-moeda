import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { Button } from "../../components/Button";
import { useHome } from "./useHome";
import { moneyMask } from "../../utils/moneyMask";

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

        <form
          className="d-flex flex-column gap-4 mt-5"
          onSubmit={handleConvert}
        >
          <div className="d-flex flex-column align-items-start gap-1">
            <div>
              <Input
                name="coin"
                placeholder="Dólar"
                onChange={(e) => {
                  handleInputCoinValue(e);
                  validateInputCoinValue(e);
                }}
                value={moneyMask(inputCoinValue, true)}
              />
            </div>

            <div style={{ height: "16px" }}>
              <p className="text-danger">{error}</p>
            </div>
          </div>

          <InputRadio />

          <Button type="submit" styleType="btn-secondary" icon="change">
            Converter
          </Button>
        </form>
      </div>
    </div>
  );
}
