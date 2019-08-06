### Instruction for CardFooter

Render CardFooter as a Button

```js
const Card = require('../Card/index').default;
const CardHeader = require('../CardHeader/index').default;
const CardBody = require('../CardHeader/index').default;
const Button = require('../Button/index').default;

<Card>
    <CardHeader>Title</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter as={Button}>Footer Button</CardFooter>
</Card>;
```
