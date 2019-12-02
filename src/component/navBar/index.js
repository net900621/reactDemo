import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
                <LinkTab label="首页推荐" href="#/" />
                <LinkTab label="影评列表" href="#/list" />
                <LinkTab label="个人页" href="#/people" />
            </Tabs>
        </AppBar>
    );
}