import * as styled from "./styles";

import Image from "next/image";

export function Header() {
  return (
    <styled.Container>
      <styled.Content>
        <Image src="/images/logo.svg" alt="dt money." width="173" height="40" />

        <styled.Button type="button">Nova transação</styled.Button>
      </styled.Content>
    </styled.Container>
  );
}
