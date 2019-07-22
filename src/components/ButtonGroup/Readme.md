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
        <Button color="primary" size="small">
            Small
        </Button>
        <VerticalSeparator />
        <Button color="secondary" size="small">
            Small
        </Button>
        <Button color="warning" size="small">
            Small
        </Button>
        <Button color="alternative" size="small">
            Small
        </Button>
    </ButtonGroup>

    <ButtonGroup>
        <Button color="primary" size="large">
            Large
        </Button>
        <VerticalSeparator />
        <Button color="secondary" size="large">
            Large
        </Button>
        <Button color="warning" size="large">
            Small
        </Button>
        <Button color="alternative" size="large">
            Small
        </Button>
    </ButtonGroup>
</div>;
```
