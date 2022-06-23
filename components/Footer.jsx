export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-primary">
        <div className="footer-primary-inner container py-5">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://pixellab.ro" title="Information">
                  Information
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Contact us">
                  Contact us
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Free returns*">
                  Free returns*
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="My account">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://pixellab.ro" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Our story">
                  Our story
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Art and culture">
                  Art and culture
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Our private labels">
                  Our private labels
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Stores">
                  Stores
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://pixellab.ro" title="Services">
                  Services
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Ship to store">
                  Ship to store
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Gift card">
                  Gift card
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Online only">
                  Online only
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Tips and tricks">
                  Tips and tricks
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Home">
                  Home
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://pixellab.ro" title="Loyalty programs">
                  Loyalty programs
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Sign up to the simons">
                  Sign up to the simons
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="My account">
                  My account
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Conditions">
                  Conditions
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Faq">
                  Faq
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact mb-3">
            <h1>
              <span>Thread Affair</span> Milano
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/* no br */}
              <a href="tel:+Tel: 0039 02 760 003 66" title="Call us">
                Tel: Tel: 0039 02 760 003 66
              </a>
              {/* no br */}
              <a href="mailto:office@thread-affair.com" title="Email us">
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support mb-3">
            <ul>
              <li>
                <a href="https://pixellab.ro" title="Support">
                  <i className="fa-solid fa-mobile-button"></i>
                  Support
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Chat">
                  <i className="fa-brands fa-rocketchat"></i>
                  Chat
                </a>
              </li>

              <li>
                <a href="https://pixellab.ro" title="Email">
                  <i className="fa-solid fa-envelope"></i>
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4">
        <p>©2019 THREAD AFFAIR. All Rights Reserved.</p>

        <p>
          Design by
          <img
            src="/images/pixellab_logo.jpg"
            className="ms-2"
            alt="Pixellab"
            title="Pixellab"
          ></img>
        </p>
      </section>
    </footer>
  );
}
