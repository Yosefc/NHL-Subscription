import React from "react";
import { Route } from "react-router-dom";
import SubscriptionPage from "../components/SubscriptionPage";
import UnsubscribePage from "../components/UnsubscribePage";
import StatsPage from "../Pages/StatsPage";

export const SubscrtionRoute = () => <Route exact path="/" component={SubscriptionPage} />;

export const UnsubscribeRoute = () => <Route path="/unsubscribe" component={UnsubscribePage} />;

export const StatsPageRoute = () => <Route path="/stats" component={StatsPage} />;
