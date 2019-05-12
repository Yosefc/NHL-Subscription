import React from 'react';
import { Route } from "react-router-dom";
import SubscriptionPage from "../components/SubscriptionPage"
import UnsubscriptionPage from "../components/UnsubscriptionPage";

export const SubscrtionRoute = () =>
    <Route exact path="/" component={SubscriptionPage} />

export const UnsubscribeRoute = () =>
    <Route path="/unsubscribe" component={UnsubscriptionPage} />