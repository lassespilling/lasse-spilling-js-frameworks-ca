import React from "react"; // React
import Loadr from "randloadr"; // Random message

class Loader extends React.Component {
    static defaultProps = {
        loadrOptions: {
            delay: 2000
        }
    };

    componentDidMount() {
        if (!this.Element) {
            return;
        }
        this.instance = new Loadr(this.Element, this.props.loadrOptions);
        this.instance.start();
    }

    componentWillUnmount() {
        this.instance.stop();
    }

    render() {
        return (
            <div
                className="loader"
                {...this.props}
                ref={el => (this.Element = el)}
            />
        );
    }
}
export default Loader;
