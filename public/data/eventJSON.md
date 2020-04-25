# Events JSON requirements 

Full documentation [here](https://www.npmjs.com/package/@langleyfoxall/react-dynamic-form-builder).

Form object must have **postTarget** string and **fields** array of objects(Input Field).

## Field object must contain 

1. "placeholder": as it's the only way that describes the input field to users.

2. "name": represent input name.

3. "validationRules": if there is an input validation.

4. if there is validationRules it must contain "rule" and "message".



## Example

``` json
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

```



## full json example

``` json
[
    {
        "id": "4",
        "title": "Event 4 Title",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, sed voluptate. Iste officia possimus necessitatibus corporis deserunt sequi perspiciatis odio ab? Nam, voluptate dicta at unde nesciunt natus distinctio inventore!",
        "startDate": "07-05-2020",
        "endDate": "07-06-2020",
        "startTime": "22:00",
        "endTime": "12:00",
        "location": "Egypt, Cairo",
        "cover": "https://via.placeholder.com/500?text=Event+4",
        "images": [
            "https://via.placeholder.com/500?text=Image+1",
            "https://via.placeholder.com/500?text=Image+2",
            "https://via.placeholder.com/500?text=Image+3",
            "https://via.placeholder.com/500?text=Image+4"
        ],
        "status": "upcoming",
        "form": {
            "postTarget": "/events/10",
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
    }
]

```