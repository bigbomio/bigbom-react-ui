### Status by colors

`Status` is use to display current state of an object

```js
<div className="d-flex justify-space-between">
    <Status>Normal</Status>
    <Status color="primary">Running</Status>
    <Status color="secondary">Stopped</Status>
    <Status color="warning">Delivering</Status>
    <Status color="alternative">Manual stopped</Status>
    <Status color="alternative2">Stopped by other</Status>
</div>
```

### Status by sizes

Three available sizes for `Status`

```js
<div className="d-flex w-50 justify-space-between align-items-flex-start">
    <Status size="sm">small</Status>
    <Status>normal</Status>
    <Status size="lg">large</Status>
</div>
```

### Status as Anchor

Using custom type with property `as` to render `Status` as an Anchor element or button

```js
<div className="">
    <Status href="#" as="a" size="sm">
        This is an anchor
    </Status>
    <Status className="m-sm" as="button" onClick={() => alert('clicked!')} size="sm">
        Click me!
    </Status>
</div>
```
