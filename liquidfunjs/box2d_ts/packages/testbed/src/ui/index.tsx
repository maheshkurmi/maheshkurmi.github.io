import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "typeface-open-sans";
import { Router } from "react-router-ts";

import { Main } from "./Main";
import { TestControl } from "../testControls";
import { SideBar } from "./SideBar";
import packageData from "../../package.json";

import "./style.scss";

export interface TestControlGroup {
    legend: string;
    controls: TestControl[];
}

const defaultTestControlGroupsState = {
    key: 0,
    groups: [] as TestControlGroup[],
};

export type TestControlGroupsState = typeof defaultTestControlGroupsState;

function reduceTestControlGroups(state: TestControlGroupsState, groups: TestControlGroup[]) {
    return {
        key: state.key + 1,
        groups,
    };
}

function App() {
    const [testControlGroups, setTestControls] = useReducer(reduceTestControlGroups, defaultTestControlGroupsState);

    return (
        <div className="container">
            <Main setTestControlGroups={setTestControls} />
            <SideBar testControlGroups={testControlGroups} />
        </div>
    );
}

document.title = `@Box2D Testbed v${packageData.version}`;

ReactDOM.render(
    <Router mode="hash">
        <App />
    </Router>,
    document.getElementById("root") as HTMLElement,
);
