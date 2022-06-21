import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header() {
  return (
    <header className="header container mt-lg-4">
      <HeaderSecondary></HeaderSecondary>

      <HeaderPrimary></HeaderPrimary>
    </header>
  );
}
