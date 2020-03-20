import React, { Component } from 'react'
import { InputGroup, Input, Icon } from "rsuite";

export default class Topic extends Component {
    state = {
        search: ""
    }
    searchInput = event => {
        let target = event.target;
        this.setState({
            search: target.value
        })
    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center mt-3">
                    <InputGroup className="search-bar" onChange={this.searchInput} >
                        <Input placeholder="Search..." />
                        <InputGroup.Button>
                            <Icon icon="search" />
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </>
        )
    }
}
