import React from "react";

export const withSuspence = (Component) => {
    return <React.Suspense fallback={<div className="container">Загрузка...</div>}><Component /></React.Suspense>
}