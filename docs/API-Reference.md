
## API Reference

#### Create workspace

```http
  POST /workspaces
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of the workspace |

#### Example
```json
{
  "title": "Digital Marketing"
}
```

#### Get all workspaces

```http
  GET /workspaces
```

#### Example
```json
{
  "success": true,
  "results": [
    {
      "_id": "60dabf3b31e9180004c4653c",
      "projects": [],
      "title": "Digital Marketing",
      "createdAt": "2021-06-29T06:35:39.891Z",
      "updatedAt": "2021-06-29T06:35:39.891Z",
      "__v": 0
    },
    {
      "_id": "70dksikd1e8028jkdmeikdk",
      "projects": [],
      "title": "my workspace",
      "createdAt": "2021-06-29T06:49:05.701Z",
      "updatedAt": "2021-06-29T06:49:05.701Z",
      "__v": 0
    },
  ]
}
```
#### Get workspace

```http
  GET /workspace/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workspace to fetch |

#### Example
```json
{
  "success": true,
  "results": [
    {
      "_id": "60dabf3b31e9180004c4653c",
      "projects": [],
      "title": "my workspace",
      "createdAt": "2021-06-29T06:35:39.891Z",
      "updatedAt": "2021-06-29T06:35:39.891Z",
      "__v": 0
    }
  ]
}
```

#### Update workspace

```http
  PUT /workspace/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workspace to fetch |
| `title`   | `string` | **Required**. New Title for the workspace   |

#### Example
```json
{
  "title": "Web dev"
}
```

#### Delete workspace

```http
  DELETE /workspace/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workspace to fetch |



  