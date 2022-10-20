# Demo project for a TypeORM bug

This repository demonstrates a bug in which the `.save()` method
does not return the entity updated with its id.

- Project was init with `npx react-native init IdFailure --template react-native-template-typescript@6.10.4`
- TypeORM 0.3.10

Simply launch the project either on iOS or android and watch the metro logs.

- After the `INSERT INTO` the entity has `id` `undefined`.
- The `SELECT` just after got it right.