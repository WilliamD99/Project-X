//Components
import React, { Component } from 'react'
import { InputGroup, Input, Icon, Button } from "rsuite";
import Bone from "./Base/Bone"
//Helpers
import { git } from "../helpers/gitAPI"
import chunk from "../helpers/sliceData";

export default class Topic extends Component {
    state = {
        search: "",
        data: ""
    }
    searchInput = event => {
        let target = event.target;
        this.setState({
            search: target.value
        })
    }
    //Axios call for search bar
    search = () => {
        let dataObject = git.get(`repositories?q=${this.state.search}`)
        dataObject.then(res => {
            let data = res.data.items;
            let dataSliced = chunk(data, 10)
            this.setState({
                data: dataSliced
            })
        })
    }
    //Axios call for suggestion buttons
    suggest = event => {
        let target = event.target;
        let name = target.name;
        let dataObject = git.get(`repositories?q=${name}`)
        dataObject.then(res => {
            let data = res.data.items;
            let dataSliced = chunk(data, 10)
            this.setState({
                data: dataSliced
            })
        })
    }
    render() {
        if (this.state.data === "") {
            return (
                <>
                    <div className="d-flex justify-content-center mt-3">
                        <InputGroup className="search-bar" onChange={this.searchInput} >
                            <Input placeholder="Search topic..." />
                            <InputGroup.Button onClick={this.search}>
                                <Icon icon="search" />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button size="xs" className="mr-1" componentClass="a" name="javascript" onClick={this.suggest}>Javascript</Button>
                        <Button size="xs" className="mr-1" componentClass="a" name="python" onClick={this.suggest}>Python</Button>
                        <Button size="xs" className="mr-1" componentClass="a" name="nodejs">Node.js</Button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button size="xs" className="mr-1" componentClass="a" name="game development" onClick={this.suggest}>Game development</Button>
                        <Button size="xs" className="mr-1" componentClass="a" name="react" onClick={this.suggest}>React</Button>
                        <Button size="xs" className="mr-1" componentClass="a" name="machine learning" onClick={this.suggest}>Machine Learning</Button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button size="xs" className="mr-1" componentClass="a" name="covid" onClick={this.suggest}>Covid-19</Button>
                        <Button size="xs" className="mr-1" componentClass="a" name="typescript" onClick={this.suggest}>Typescript</Button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="d-flex justify-content-center mt-3">
                        <InputGroup className="search-bar" onChange={this.searchInput} >
                            <Input placeholder="Search topic..." />
                            <InputGroup.Button onClick={this.search}>
                                <Icon icon="search" />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <Bone data={this.state.data[this.props.page]} length={this.state.data.length} controller={this.props.pageControl} ava={this.props.ava} id={this.props.id} reloadSave={this.props.reloadSave} />
                </>
            )
        }
    }
}
