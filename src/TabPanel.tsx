import React from "react";

interface Props {
    children: React.ReactNode;
    value?: number;
    index?: number
}

class TabPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <div
                role="tabpanel"
                hidden={this.props.value != this.props.index}
            >
                {this.props.children}
            </div>
        )
    }
}

export default TabPanel;