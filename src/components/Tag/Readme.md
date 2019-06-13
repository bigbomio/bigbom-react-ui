### Tags by color

```js
<div className="d-flex">
    <Tag className="m-sm" >hello</Tag>
    <Tag className="m-sm" color="primary">hello</Tag>
    <Tag className="m-sm" color="secondary">hello</Tag>
    <Tag className="m-sm" color="warning">hello</Tag>
    <Tag className="m-sm" color="alternative">hello</Tag>
</div>
```

### Tags by sizes

```js
<div className="">
    <Tag className="m-sm" size="small">small</Tag>
    <Tag className="m-sm">normal</Tag>
    <Tag className="m-sm" size="large">large</Tag>
</div>
```

### Href tag

```js
<div className="d-flex">
    <Tag as="a" href="#" className="m-sm" >hello</Tag>
    <Tag as="a" href="#" className="m-sm" color="primary">hello</Tag>
    <Tag as="a" href="#" className="m-sm" color="secondary">hello</Tag>
    <Tag as="a" href="#" className="m-sm" color="warning">hello</Tag>
    <Tag as="a" href="#" className="m-sm" color="alternative">hello</Tag>
</div>
```

### Disposable tag

```js
initialState = { 1: true, 2: true, 3: true };

function handleClickClose(tagNum, e) {
    e.preventDefault();
    setState({ [tagNum]: !state[tagNum] });
}

<div className="d-flex">
    {state[1] && <Tag className="m-sm" onClickClose={handleClickClose.bind(null, 1)} disposable>tag 1</Tag>}
    {state[2] && <Tag className="m-sm" color="secondary" onClickClose={handleClickClose.bind(null, 2)} disposable>tag 2</Tag>}
    {state[3] && <Tag className="m-sm" as="a" href="#" onClickClose={handleClickClose.bind(null, 3)} disposable>tag 3</Tag>}
</div>
```