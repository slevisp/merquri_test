import { useRef } from 'react'
import { Space } from 'antd'
import store from '../../../middleware/store'
import { Input, Button } from '../../common'
import { searchWeather } from '../../../middleware/features/boardSlice'

const SearchBar = () => {
  const inputCityRef = useRef(null)
  const inputCountryRef = useRef(null)
  const dispatch = store.dispatch

  const onSearchClicked = () => {
    const inputCity: any = inputCityRef.current
    const inputCountry: any = inputCountryRef.current
    const city = inputCity.input.value
    const country = inputCountry.input.value
    if (!city) {
      return
    }

    dispatch(
      searchWeather({
        city,
        country,
        type: 'new',
      })
    )
  }

  const onClearClicked = () => {
    const inputCity: any = inputCityRef.current
    const inputCountry: any = inputCountryRef.current
    inputCity.input.value = ''
    inputCountry.input.value = ''
  }

  return (
    <div>
      <Space size='middle'>
        <Input ref={inputCityRef} label='City:' />
        <Input ref={inputCountryRef} label='Country:' />
        <Button onClick={onSearchClicked}>Search</Button>
        <Button onClick={onClearClicked}>Clear</Button>
      </Space>
    </div>
  )
}

export default SearchBar
