import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Markdown-for-Agents endpoint.
 * When the homepage is requested with Accept: text/markdown,
 * Vercel rewrites to this function which returns a markdown summary.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
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
`

  const tokenCount = md.split(/\s+/).length

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader('X-Markdown-Tokens', String(tokenCount))
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.status(200).send(md)
}
