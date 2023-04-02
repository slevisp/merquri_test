import { Typography, List } from 'antd'
import { useSelector } from 'react-redux'
import HistoryItem from './HistoryItem'

const { Title } = Typography
// todo add init history
const SearchHistory = () => {
  const { list } = useSelector((state: any) => state.history)
  return (
    <div>
      <Title level={3}>Search History</Title>
      <List>
        {list.length > 0
          ? list.map((history: any, index: number) => {
              const { city, country, timestamp } = history
              return (
                <HistoryItem
                  key={timestamp}
                  city={city}
                  country={country}
                  order={++index}
                  timestamp={timestamp}
                />
              )
            })
          : null}
      </List>
    </div>
  )
}

export default SearchHistory
