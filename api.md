# API data

## Blog

The blog module.

### Blog List

#### Get Request

**Request** `/blogs`

**Response:**

- **200:**

```json
[
  {
    "id": "1",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "title": "Blog 1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  },
  {
    "id": "2",
    "title": "Blog 2",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  }
]
```

### Single Blog

#### Get Request

**Request** `/blogs/{id}`

**Response:**

- **200:**

```json
{
  "id": "1",
  "title": "Blog 1",
  "cover": "https://via.placeholder.com/500?text=Image+1",
  "categories": [
    { "categoryId": "1", "categoryName": "prog" },
    { "categoryId": "2", "categoryName": "tech" }
  ],
  "author": "User Name",
  "authorFacebookProfile": "https://www.facebook.com/",
  "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
  "createdAt": "07-05-2020",
  "relatedBlogs": [
    {
      "id": "2",
      "cover": "https://via.placeholder.com/500?text=Image+1",
      "title": "Blog 2",
      "categories": [
        { "categoryId": "1", "categoryName": "prog" },
        { "categoryId": "2", "categoryName": "tech" }
      ],
      "createdAt": "07-05-2020"
    },
    {
      "id": "3",
      "cover": "https://via.placeholder.com/500?text=Image+1",
      "title": "Blog 3",
      "categories": [
        { "categoryId": "1", "categoryName": "prog" },
        { "categoryId": "2", "categoryName": "tech" }
      ],
      "createdAt": "07-05-2020"
    }
  ]
}
```

- **404:**

```json
{
  "msg": "No Blog found"
}
```

### Categories

#### Get Request

**Request** `/categories`

**Response:**

- **200:**

```json
[
  {
    "categoryId": "1",
    "categoryName": "tech"
  },
  {
    "categoryId": "2",
    "categoryName": "programming"
  },
  {
    "categoryId": "3",
    "categoryName": "network"
  },
  {
    "categoryId": "4",
    "categoryName": "web"
  },
  {
    "categoryId": "5",
    "categoryName": "security"
  },
  {
    "categoryId": "6",
    "categoryName": "embedded"
  }
]
```

### Filter By category

**Request** `/blogs/filter/{categoryId}`

**Response:**

- **200:**

```json
[
  {
    "id": "1",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "title": "Blog 1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  },
  {
    "id": "2",
    "title": "Blog 2",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  }
]

```

- **404:**

```json
{
  "msg": "Category doesn't exist"
}
```

### Search by title

**Request** `/blogs/search?query={title}` // should be case insensitive

**Response:**

- **200:**

```json
[
  {
    "id": "1",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "title": "Blog 1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  },
  {
    "id": "2",
    "title": "Blog 2",
    "cover": "https://via.placeholder.com/500?text=Image+1",
    "categories": [
      { "categoryId": "1", "categoryName": "prog" },
      { "categoryId": "2", "categoryName": "tech" }
    ],
    "author": "User Name",
    "authorFacebookProfile": "https://www.facebook.com/",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, veniam, tempora vel consequuntur sequi odio fugit voluptatem facere non debitis explicabo praesentium ratione aliquam doloribus, dignissimos eligendi veritatis at totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. \nCorporis, tempore rem aliquid fugiat debitis perferendis voluptates magni recusandae nemo molestiae dicta illo id quos reprehenderit natus, cumque repudiandae illum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores iste incidunt maxime aliquid odio voluptate eaque voluptatibus obcaecati corrupti quibusdam, expedita, perferendis deleniti optio quas fuga exercitationem. Quae, accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, est quae explicabo recusandae autem nostrum voluptatum excepturi provident in, magni quis beatae error fugit. Omnis nihil deserunt animi ab?",
    "createdAt": "07-05-2020"
  }
]

```

- **404:**

```json
{
  "msg": "No blogs found"
}
```

## Events

The events module.

### Events List

**Request** `/events`

**Response:**

**200:**

```json
[
  {
    "id": "1",
    "title": "Event 1 Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sed voluptate. Iste officia possimus necessitatibus corporis deserunt sequi perspiciatis odio ab? Nam, voluptate dicta at unde nesciunt natus distinctio inventore!",
    "startDate": "07-05-2020",
    "endDate": "07-06-2020",
    "startTime": "22:00",
    "endTime": "12:00",
    "location": "Egypt, Cairo",
    "cover": "https://via.placeholder.com/500?text=Event+1",
    "images": [
      "https://via.placeholder.com/500?text=Image+1",
      "https://via.placeholder.com/500?text=Image+2",
      "https://via.placeholder.com/500?text=Image+3",
      "https://via.placeholder.com/500?text=Image+4"
    ],
    "status": "upcoming",
    "form": {
      "postTarget": "/events/1",
      "fields": [
        {
          "name": "name",
          "placeholder": "Name",
          "transformer": {
            "onChange": "uppercase"
          },
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your name"
            }
          ]
        },
        {
          "name": "age",
          "placeholder": "Age",
          "filter": "numeric",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your age"
            }
          ]
        },
        {
          "name": "email",
          "placeholder": "Email",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter an email"
            },
            {
              "rule": "email",
              "message": "Please enter a valid email"
            }
          ]
        },
        {
          "name": "textarea",
          "placeholder": "Enter a message here"
        }
      ]
    }
  },
  {
    "id": "2",
    "title": "Event 2 Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sed voluptate. Iste officia possimus necessitatibus corporis deserunt sequi perspiciatis odio ab? Nam, voluptate dicta at unde nesciunt natus distinctio inventore!",
    "startDate": "07-05-2020",
    "endDate": "07-06-2020",
    "startTime": "22:00",
    "endTime": "12:00",
    "location": "Egypt, Cairo",
    "cover": "https://via.placeholder.com/500?text=Event+2",
    "status": "past",
    "form": {
      "postTarget": "/events/2",
      "fields": [
        {
          "name": "name",
          "placeholder": "Name",
          "transformer": {
            "onChange": "uppercase"
          },
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your name"
            }
          ]
        },
        {
          "name": "age",
          "placeholder": "Age",
          "filter": "numeric",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your age"
            }
          ]
        },
        {
          "name": "email",
          "placeholder": "Email",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter an email"
            },
            {
              "rule": "email",
              "message": "Please enter a valid email"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "3",
    "title": "Event 3 Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sed voluptate. Iste officia possimus necessitatibus corporis deserunt sequi perspiciatis odio ab? Nam, voluptate dicta at unde nesciunt natus distinctio inventore!",
    "startDate": "07-05-2020",
    "endDate": "07-06-2020",
    "location": "Egypt, Cairo",
    "cover": "https://via.placeholder.com/500?text=Event+3",
    "images": [
      "https://via.placeholder.com/500?text=Image+1",
      "https://via.placeholder.com/500?text=Image+2",
      "https://via.placeholder.com/500?text=Image+3",
      "https://via.placeholder.com/500?text=Image+1",
      "https://via.placeholder.com/500?text=Image+2",
      "https://via.placeholder.com/500?text=Image+3",
      "https://via.placeholder.com/500?text=Image+1",
      "https://via.placeholder.com/500?text=Image+2",
      "https://via.placeholder.com/500?text=Image+3",
      "https://via.placeholder.com/500?text=Image+4"
    ],
    "status": "upcoming"
  }
]
```

> Response Details:

1. "placeholder": as it's the only way that describes the input field to users.

2. "name": represent input name.

3. "validationRules": if there is an input validation.

4. if there is validationRules it must contain "rule" and "message".

### Single Event

**Request** `/event/{id}`

**Response:**

**200:**

```json

  {
    "id": "1",
    "title": "Event 1 Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sed voluptate. Iste officia possimus necessitatibus corporis deserunt sequi perspiciatis odio ab? Nam, voluptate dicta at unde nesciunt natus distinctio inventore!",
    "startDate": "07-05-2020",
    "endDate": "07-06-2020",
    "startTime": "22:00",
    "endTime": "12:00",
    "location": "Egypt, Cairo",
    "cover": "https://via.placeholder.com/500?text=Event+1",
    "images": [
      "https://via.placeholder.com/500?text=Image+1",
      "https://via.placeholder.com/500?text=Image+2",
      "https://via.placeholder.com/500?text=Image+3",
      "https://via.placeholder.com/500?text=Image+4"
    ],
    "status": "upcoming",
    "form": {
      "postTarget": "/events/1",
      "fields": [
        {
          "name": "name",
          "placeholder": "Name",
          "transformer": {
            "onChange": "uppercase"
          },
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your name"
            }
          ]
        },
        {
          "name": "age",
          "placeholder": "Age",
          "filter": "numeric",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter your age"
            }
          ]
        },
        {
          "name": "email",
          "placeholder": "Email",
          "validationRules": [
            {
              "rule": "required",
              "message": "Please enter an email"
            },
            {
              "rule": "email",
              "message": "Please enter a valid email"
            }
          ]
        },
        {
          "name": "textarea",
          "placeholder": "Enter a message here"
        }
      ]
    }
  }
```

- **404:**

```json
{
  "msg": "No Event found"
}
```

### Apply for event

**Request** `/event/{id}/{postTarget}`

> postTarget is the target received with the event in `Single Event` request.

- **body:**
  > The body will be the names and the values received with the event in `Single Event` request.

**Response:**

**200:**

```json
{
  "msg": "Form submitted successfully"
}
```

- **400:**

```json
{
  "msg": "An error occured, please try again and make sure to fill all the required fields"
}
```

## Best Members

### Members List

#### Get Request

**Request** `/best-members`

**Response:**

- **200:**

```json
[
  {
    "name": "sama",
    "committee": "web",
    "image": "https://via.placeholder.com/400"
  },
  {
    "name": "mohamed",
    "committee": "security",
    "image": "https://via.placeholder.com/400"
  },
  {
    "name": "lina",
    "committee": "hr",
    "image": "https://via.placeholder.com/400"
  },
  {
    "name": "moataz",
    "committee": "pr",
    "image": "https://via.placeholder.com/400"
  }
]
```

## Contact

The contact module

### Post Request

**Request:**: `/contact`

**_body:_**

```json
{
  "name": "John",
  "email": "test@test.com",
  "subject": "Message 1",
  "phone": "0100004535",
  "message": "Fake message"
}
```

**Response:**

- **200:**

```json
{
  "msg": "Form sent successfully"
}
```

- **400:**

```json
{
  "msg": "An error occured, please try again later and make sure to fill all fields."
}
```

## News Letter

The News Letter module

### Post Request

**Request:**: `/newsletter`

**_body:_**

```json
{
  "email": "test@test.com"
}
```

**Response:**

- **200:**

```json
{
  "msg": "You subscribed successfully"
}
```

- **400:**

```json
{
  "msg": "An error occured, please try again later and make sure to type your email."
}
```
