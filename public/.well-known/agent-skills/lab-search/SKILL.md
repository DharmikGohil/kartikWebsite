# Lab Search Skill

Search NABL-accredited testing laboratories across India.

## Endpoint

`GET https://chemassureglobal.com/api/labs-search`

## Parameters

| Name        | Type    | Description                          |
|-------------|---------|--------------------------------------|
| query       | string  | Free-text search across lab fields   |
| state       | string  | Filter by Indian state               |
| city        | string  | Filter by city                       |
| disciplines | string  | Filter by testing discipline         |
| page        | integer | Page number (default: 1)             |
| limit       | integer | Results per page (default: 20, max: 100) |
| sortBy      | string  | Sort by: name, date, or relevance    |

## Example

```
GET /api/labs-search?state=Gujarat&disciplines=Chemical&limit=10
```
