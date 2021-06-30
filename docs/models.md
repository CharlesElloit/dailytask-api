## Models

### **User**

|    Fields     |   Data Types  |  Constraints   |
|---------------|---------------|-----------------
|    id         |   String      |  Required
|    email      |   String      |  Required, Unique,
|    avatar     |   String      |  optional
|    username   |   String      |  Required, Length 60, Unique 
|    password   |   String      |  Required, length not < 3 not > 30
|    createdAt  |   Date        |  Default now
|    updatedAt  |   Date        |  Default now

### **Workspace**

|    Fields     |   Types                 |  Constraints   |
|---------------|-------------------------|-----------------
|    id         |   String                |  Required
|    title      |   String                |  Required, Unique, Length 60
|    projects   |   [ ref -> Project.id ] |  optional
|    user       |   ref -> User.id        |  Required
|    createdAt  |   Date                  |  Default now
|    updatedAt  |   Date                  |  Default now

## **Project**

|    Fields     |   Types               |  Constraints                          |
|---------------|-----------------------|----------------------------------------
|    id         |   String              |  Required,
|    name       |   String              |  Required, Unique, Length 30
|    tasks      |   [ ref -> Tasks.id ] |  Optional
|    user       |   ref -> User.id      |  Required
|    workspace  |   ref -> Workspace.id |  Required
|    bgColor    |   String              |  Optional, Default bordered
|    coverImg   |   Date                |  Optional
|    createdAt  |   Date                |  Default now
|    updatedAt  |   Date                |  Default now

## **Task**

|    Fields     |   Types               |  Constraints                          |
|---------------|-----------------------|----------------------------------------
|    id         |   String              |  Required
|    done       |   Boolean             |  Optional, Default false
|    user       |   ref -> User.id      |  Required
|    assignee   |   [ ref -> User.id ]  |  Optional
|    due        |   Date                |  Required
|    priority   |   Number              |  Required
|    project    |   ref -> Project.id   |  Required
|    type       |   string              |  Optional
|    createdAt  |   Date                |  Default now
|    updatedAt  |   Date                |  Default now
