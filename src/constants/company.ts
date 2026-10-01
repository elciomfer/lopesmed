export const company = {
  brand: "lopesmed",
  legalName: "LOPES SAUDE SEGURANCA E MEDICINA DO TRABALHO LTDA",
  cnpj: "66.120.402/0001-38",
  // TODO: confirmar com o cliente (Resolução CFM nº 2.336/2023)
  technicalDirector: "Dr(a). NOME, CRM-SC 00000",
  phone: {
    display: "(47) 9999-2929",
    href: "tel:+554799992929",
    schema: "+55-47-9999-2929",
  },
  whatsapp: "https://wa.me/554799992929",
  email: "contato@lopesmed.com.br",
  address: {
    street: "Rua Adolfo Konder, 143, Sala 1",
    district: "Ceramarte",
    city: "Rio Negrinho",
    state: "SC",
    zip: "89296-868",
  },
} as const;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `Rua Adolfo Konder, 143, ${company.address.district}, ${company.address.city} - ${company.address.state}`,
)}&output=embed`;
