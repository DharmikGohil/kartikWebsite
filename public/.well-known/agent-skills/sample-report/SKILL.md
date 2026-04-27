# Sample Report Skill

Request a sample quality control report from ChemAssure Global, delivered via email.

## Endpoint

`POST https://chemassureglobal.com/api/download-report`

## Request Body (JSON)

| Field   | Type   | Required | Description          |
|---------|--------|----------|----------------------|
| name    | string | yes      | Requester name       |
| email   | string | yes      | Email for delivery   |
| company | string | no       | Company name         |
| phone   | string | no       | Phone number         |

## Example

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Corp"
}
```
