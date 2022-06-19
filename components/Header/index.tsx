import * as Styled from "./styles";

import Image from "next/image";

export function Header() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Image src="/images/logo.svg" alt="dt money." width="173" height="40" />

        <Styled.Button type="button">Nova transação</Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
}
