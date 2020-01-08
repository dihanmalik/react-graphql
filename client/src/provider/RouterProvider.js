import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

import React from "React";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();
const store = new RouterStore();
const history = syncHistoryWithStore(browserHistory, store);

export default props => <Router {...props} history={history} />;
