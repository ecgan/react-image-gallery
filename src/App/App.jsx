import React from 'react'
import { BackTop, Layout } from 'antd'
import styles from './App.module.css'
import Content from './Content/Content'

const App = () => {
  return (
    <div
      className={styles.app}
    >
      <Layout>
        <Layout.Header>
          <h1>
            React Image Gallery
          </h1>
        </Layout.Header>
        <Layout.Content>
          <Content />
          <BackTop />
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
