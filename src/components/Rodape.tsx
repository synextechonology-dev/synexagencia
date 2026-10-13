import { Marca } from "./Logo";
import { Icone } from "./Icone";
import { linkWhats, site } from "@/content/site";

export function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className="rodape">
      <div className="wrap rodape__grade">
        <div>
          <Marca recorte="var(--bg-2)" />
          <p className="rodape__frase">Sites e cardápios digitais feitos a partir da identidade de cada marca.</p>
        </div>
        <ul className="rodape__links">
          <li>
            <a href={linkWhats()} target="_blank" rel="noopener">
              <Icone nome="whats" tamanho={18} /> WhatsApp
            </a>
          </li>
          <li>
            <a href={site.instagram} target="_blank" rel="noopener">
              <Icone nome="insta" tamanho={18} /> Instagram
            </a>
          </li>
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          )}
        </ul>
        <p className="rodape__fim">
          <span>{site.cidade}</span>
          {site.cnpj && <span>CNPJ {site.cnpj}</span>}
          <span>© {ano} Synex</span>
        </p>
      </div>
    </footer>
  );
}
