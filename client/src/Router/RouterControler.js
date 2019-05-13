import React from 'react';
import { Route } from "react-router-dom";
import SubscriptionPage from "../components/SubscriptionPage"
import UnsubscriptionPage from "../components/UnsubscriptionPage";
import StatsPage from "../Pages/StatsPage";

export const SubscrtionRoute = () =>
    <Route exact path="/" component={SubscriptionPage} />

export const UnsubscribeRoute = () =>
    <Route path="/unsubscribe" component={UnsubscriptionPage} />

export const StatsPageRoute = () =>
    <Route path="/stats" component={StatsPage} />