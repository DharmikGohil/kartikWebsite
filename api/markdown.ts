export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const md = `# ChemAssure Global

Industrial foam control solutions — application-specific defoamers and antifoams.

## What We Do

ChemAssure Global engineers defoamers and antifoams for textiles, wastewater, paints, paper, construction, fermentation, and sensitive water systems.

## Services

- **Foam Control Engineering** — custom defoamer formulation and testing
- **Quality Control Reports** — third-party chemical inspection and QC documentation
- **NABL Lab Search** — find accredited testing laboratories across India

## API

| Endpoint | Method | Description |
|---|---|---|
| /api/labs-search | GET | Search NABL-accredited labs |
| /api/contact | POST | Submit a contact inquiry |
| /api/download-report | POST | Request a sample QC report |
| /api/health | GET | Health check |

## Links

- Website: https://chemassureglobal.com
- Contact: https://chemassureglobal.com/contact
- API Docs: https://chemassureglobal.com/.well-known/openapi.json
- API Catalog: https://chemassureglobal.com/.well-known/api-catalog
`;

  const tokenCount = md.split(/\s+/).length;

  return new Response(md, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokenCount),
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
