import React from "react";
import { ErrorBoundary } from "../../components/Error";
import { List } from 'mf_list/List'

export default function Home() {
    return (
        <ErrorBoundary>
            <List />
        </ErrorBoundary>
    )
}