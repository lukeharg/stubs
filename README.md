# STUBS
User Guide (Updated December 2017)

## What is Stubs?
Stubs is a basic ticketing system implemented as an sample serverless application. It can vend tickets to customers with a price based on two factors; the distance between cities and whether it is high or low season.

## Setting Up
### General AWS Setup
TODO: Add general AWS credential setup here when getting into CI/CD deployment.

### Developing Locally
During development, it is recommended to use the local version of Amazon DynamoDB. Once the [setup instructions](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.html) have been completed,  you can start the database.

```java
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

## Getting Started

## Tutorials

## Best Practices

## API Reference
- /cities { "city_ascii": "Sydney", "country": "Australia" }
- /tickets { "id": 43 }
- /users { "email": "user@example.com" }

## Resources
1. https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates
2. https://simplemaps.com/data/world-cities
3. https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
4. http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html

## Notes
- Uses the *haversine* formula to calculate the distance between two points on the globe.
