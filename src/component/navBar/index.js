import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

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
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="首页推荐" href="#/" {...a11yProps(0)} />
                <LinkTab label="影评列表" href="#/list" {...a11yProps(1)} />
                <LinkTab label="个人页" href="#/people" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
    );
}