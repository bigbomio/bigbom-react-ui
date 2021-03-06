### Display the basic styles

```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button>This is a button</Button>
    <Button disabled>This is a disabled button</Button>
</div>
```

### Display as an anchor

```js
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button as="a">This is an anchor button</Button>
    <Button as="a" disabled>
        This is a disabled anchor button
    </Button>
</div>
```

### Button with custom class name

```js
const customClassName = 'bb-button--warning';
<div>
    <Button className={customClassName}>This is a custom button</Button>
</div>;
```

### Button with various of sizes

```js
<div className="d-flex justify-space-between align-items-flex-start">
    <Button size="sm">small</Button>
    <Button size="md">medium</Button>
    <Button size="lg">large</Button>
</div>
```
