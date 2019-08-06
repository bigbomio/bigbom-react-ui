### Default card with color variants

```js
<div className="d-flex justify-space-around align-items-flex-start">
    <div>
        <Card>
            <p className="mb-0 mt-0">This is a card</p>
        </Card>
    </div>

    <div>
        <Card color="primary">
            <p className="mb-0 mt-0">Primary</p>
        </Card>
    </div>

    <div>
        <Card color="secondary">
            <p className="mb-0 mt-0">Secondary</p>
        </Card>
    </div>

    <div>
        <Card color="warning">
            <p className="mb-0 mt-0">Warning</p>
        </Card>
    </div>

    <div>
        <Card color="alternative">
            <p className="mb-0 mt-0">Alternative</p>
        </Card>
    </div>

    <div>
        <Card color="alternative2">
            <p className="mb-0 mt-0">Alternative 2</p>
        </Card>
    </div>
</div>
```

### Card by sizes

```js
<div className="d-flex justify-space-around align-items-flex-start">
    <div>
        <Card size="sm">
            <p className="mb-0 mt-0">This is a small card</p>
        </Card>
    </div>

    <div>
        <Card color="primary" size="lg">
            <p className="mb-0 mt-0">This is a large card</p>
        </Card>
    </div>

    <div>
        <Card color="secondary" size="xl">
            <p className="mb-0 mt-0">This is a extra large card</p>
        </Card>
    </div>
</div>
```

### Complex card builder with header, body and footer

```js
const CardHeader = require('../CardHeader/index').default;
const CardBody = require('../CardBody/index').default;
const CardFooter = require('../CardFooter/index').default;
const Button = require('../Button/index').default;
<div>
    <div>
        <Card color="secondary">
            <CardHeader>This is the card header</CardHeader>
            <CardBody>This is the card body</CardBody>
            <CardFooter>
                <Button>See more</Button>
            </CardFooter>
        </Card>
    </div>
</div>;
```
