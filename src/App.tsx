import { Layout } from 'antd'
import { AppHeader } from './components'
import './App.css'
import SearchBar from './components/core/SearchBar'
import MainBoard from './components/core/MainBoard'
import SearchHistory from './components/core/SearchHistory'

const { Content } = Layout
function App() {
  return (
    <Layout className='App'>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <SearchBar />
        <MainBoard />
        <SearchHistory />
      </Content>
    </Layout>
  )
}

export default App
