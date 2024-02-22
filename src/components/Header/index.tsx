import { Logo } from "../../assets/svg/Logo";
import { formattedDate } from "../../utils/date";
import { formattedHour } from "../../utils/hour";

export function Header() {
  return (
    <header className="row gap-5">
      <div className="col-2">
        <div className="d-flex flex-column gap-1">
          <Logo color="#00A868" />

          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-success w-75 opacity-50"
              style={{ height: "4px" }}
            />

            <span className="text-success fw-bold">Currency</span>
          </div>
        </div>
      </div>

      <div className="col-5">
        <div className="d-flex flex-column gap-1">
          <p className="fs-5 fw-medium m-0">
            {`${formattedDate()} | ${formattedHour()}`}
          </p>

          <p className="m-0">
            Dados de câmbio disponibilizados pela Morningstar.
          </p>
        </div>
      </div>
    </header>
  );
}
