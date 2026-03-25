import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Content from '../components/Content/Content'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <React.Fragment>
      <Content>
        <img src="hero.jpeg"alt="Image of neighborhood" className="hero-image"/>
      </Content>
    </React.Fragment>
  )
}
