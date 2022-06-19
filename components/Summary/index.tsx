import * as Styled from "./styles";

import Image from "next/image";

export function Summary() {
  return (
    <Styled.Container>
      <Styled.Item>
        <header>
          <p>Entradas</p>
          <Image
            src="/images/income.svg"
            alt="income image."
            width="32"
            height="32"
          />
        </header>
        <strong>R$1.000,00</strong>
      </Styled.Item>

      <Styled.Item>
        <header>
          <p>Saídas</p>
          <Image
            src="/images/outcome.svg"
            alt="outcome image."
            width="32"
            height="32"
          />
        </header>
        <strong>- R$500,00</strong>
      </Styled.Item>

      <Styled.Item className="highlight">
        <header>
          <p>Total</p>
          <Image src="/images/total.svg" alt="Icome" width="32" height="32" />
        </header>
        <strong>R$500,00</strong>
      </Styled.Item>
    </Styled.Container>
  );
}
