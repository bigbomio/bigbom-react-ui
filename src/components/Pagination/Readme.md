### Pagination

Refs: https://github.com/react-component/pagination

```js
initialState = { current: 3, total: 450, pageSize: 5 };

function onChange(current, pageSize) {
    console.log('onChange ' + { current, pageSize });
    setState({ current, pageSize });
}

function onShowSizeChange(current, pageSize) {
    console.log('onShowSizeChange ', { current, pageSize });
    setState({ current, pageSize });
}

<div>
    <div className="d-flex">
        <Pagination
            current={state.current}
            total={state.total}
            showSizeChanger
            pageSize={state.pageSize}
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
        />
    </div>
</div>;
```
