# Contact Form Skill

Submit a contact inquiry to ChemAssure Global.

## Endpoint

`POST https://chemassureglobal.com/api/contact`

## Request Body (JSON)

| Field   | Type   | Required | Description          |
|---------|--------|----------|----------------------|
| name    | string | yes      | Contact name         |
| email   | string | yes      | Contact email        |
| company | string | no       | Company name         |
| phone   | string | no       | Phone number         |
| message | string | yes      | Inquiry message      |

## Example

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Interested in defoamer solutions for wastewater treatment."
}
```
