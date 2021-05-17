'use strict';

const e = React.createElement;

const MyComponent = () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
    return e("div", null, loading ? e("h3", null, "loading...") : e("h3", null, "this comes from react"));
};

const domElement = document.querySelector('#my-component-container');
ReactDOM.render(e(MyComponent), domElement);