import * as React from 'react'

function Content({children}: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <div className="content">
                {children}
            </div>
        </React.Fragment>
    )
}

export default Content;