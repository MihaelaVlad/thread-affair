import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header() {
  return (
    <header className="header container my-lg-4">
      <HeaderSecondary></HeaderSecondary>

      <HeaderPrimary></HeaderPrimary>
    </header>
  );
}
