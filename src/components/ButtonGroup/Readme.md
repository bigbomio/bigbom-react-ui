`ButtonGroup` is utilized for a series of buttons

```js
const Button = require('../Button').default;

<ButtonGroup>
    <Button color="primary">First</Button>
    <Button active color="secondary">
        Second
    </Button>
    <Button color="warning">Third</Button>
    <Button color="alternative">Fourth</Button>
</ButtonGroup>;
```

```js
const Button = require('../Button').default;
<ButtonGroup>
    <Button disabled color="primary">
        First
    </Button>
    <Button disabled color="secondary">
        Second
    </Button>
    <Button disabled color="warning">
        Third
    </Button>
    <Button disabled color="alternative">
        Fourth
    </Button>
</ButtonGroup>;
```

`ButtonGroup` with various button sizes

```js
const Button = require('../Button').default;
const VerticalSeparator = require('../VerticalSeparator').default;

<div className="d-flex justify-space-between align-items-flex-start">
    <ButtonGroup>
        <Button color="primary" size="sm">
            Small
        </Button>
        <VerticalSeparator />
        <Button color="secondary" size="sm">
            Small
        </Button>
        <Button color="warning" size="sm">
            Small
        </Button>
        <Button color="alternative" size="sm">
            Small
        </Button>
    </ButtonGroup>

    <ButtonGroup>
        <Button color="primary" size="lg">
            Large
        </Button>
        <VerticalSeparator />
        <Button color="secondary" size="lg">
            Large
        </Button>
        <Button color="warning" size="lg">
            Small
        </Button>
        <Button color="alternative" size="lg">
            Small
        </Button>
    </ButtonGroup>
</div>;
```
