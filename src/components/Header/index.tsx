import logo from "../../assets/images/logo.jpg";
import { formattedDate } from "../../utils/formattedDate";
import { formattedHour } from "../../utils/formattedHour";

export function Header() {
  return (
    <header className="row gap-3 gap-lg-5 align-items-center">
      <div className="col-10 col-lg-2">
        <div className="d-flex flex-column gap-1">
          <img src={logo} alt="" style={{ height: 60, width: 120 }} />

          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-success w-75 opacity-50"
              style={{ height: "4px" }}
            />

            <span className="text-success fw-bold">Currency</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="d-flex flex-column gap-1">
          <p className="fs-5 fw-medium m-0">
            {`${formattedDate().dateFormatText} | ${formattedHour()}`}
          </p>

          <p className="m-0">
            Dados de câmbio disponibilizados pelo{" "}
            <a
              href="https://dadosabertos.bcb.gov.br/"
              target="_blank"
              className="link-success link-underline-opacity-0"
            >
              Banco Central do Brasil
            </a>
            .
          </p>
        </div>
      </div>
    </header>
  );
}
