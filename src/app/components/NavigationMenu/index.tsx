import Link from 'next/link';

export const NavigationMenu = () => {
  return (
    <menu>
      <ul>
        <li>
          <Link
            href="/login"
            title="Entrar"
          >
            Entrar
          </Link>
          <Link
            href="/my-account"
            title="Minha Conta"
          >
            Minha Conta
          </Link>
          <Link
            href="/addresses"
            title="Endereços"
          >
            Endereços
          </Link>
          <Link
            href="/my-netshoes"
            title="Minha Netshoes"
          >
            Minha Netshoes
          </Link>
        </li>
      </ul>
    </menu>
  );
};
