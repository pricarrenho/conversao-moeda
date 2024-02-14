import { Logo } from "../../assets/svg/Logo";
import { formattedDate } from "../../utils/date";
import { formattedHour } from "../../utils/hour";

export function Header() {
  return (
    <header className="d-flex gap-5">
      <div className="d-flex flex-column">
        <Logo color="#00A868" />

        <div className="d-flex align-items-center gap-2">
          <div
            className="bg-success w-75 opacity-50"
            style={{ height: "4px" }}
          ></div>

          <span className="text-success fw-bold">Currency</span>
        </div>
      </div>

      <div>
        <p className="fs-5 fw-medium m-0">{`${formattedDate()} | ${formattedHour()}`}</p>

        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </div>
    </header>
  );
}
