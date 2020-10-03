import React from 'react'

import '../styles/globals.css'

function MyApp(arg: {
    Component: React.ComponentType
    pageProps: JSX.IntrinsicAttributes
}): JSX.Element {
    return <arg.Component {...arg.pageProps} />
}

export default MyApp
